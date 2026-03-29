// ============================================================
//  APP.JS — Main voting logic
//  Voting state: localStorage
//  Submission: Google Sheets via Apps Script Web App
// ============================================================

// ── CONFIG ───────────────────────────────────────────────────
const CONFIG = {
  // Paste your Google Apps Script Web App URL here after setup
  GOOGLE_SHEET_URL: "https://script.google.com/macros/s/AKfycbypVRc6k89MVCiw04BYWTmSvytkAPJ5v45sJ2bDHkjFaZDKvbPnKM53OjigfXMgjVwP/exec",

  // Change this to prevent duplicate submissions
  // "localStorage" = one vote per browser (default)
  VOTE_LOCK_KEY: "cas_anime_awards_submitted_v1",

  // Storage key for in-progress votes
  VOTES_STORAGE_KEY: "cas_anime_awards_votes_v1",
};

// ── STATE ─────────────────────────────────────────────────────
let currentVotes = {}; // { categoryId: nomineeIndex }
let currentPage = 0;   // which category (0-indexed) is being shown

// ── INIT ──────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  loadVotesFromStorage();
  renderPage(currentPage);
  updateProgressBar();

  // If already submitted, show modal immediately
  if (localStorage.getItem(CONFIG.VOTE_LOCK_KEY)) {
    document.getElementById("voted-modal").style.display = "flex";
  }

  document.getElementById("categories-total").textContent = CATEGORIES.length;
});

// ── STORAGE ───────────────────────────────────────────────────
function loadVotesFromStorage() {
  const saved = localStorage.getItem(CONFIG.VOTES_STORAGE_KEY);
  if (saved) {
    try { currentVotes = JSON.parse(saved); } catch (e) { currentVotes = {}; }
  }
}

function saveVotesToStorage() {
  localStorage.setItem(CONFIG.VOTES_STORAGE_KEY, JSON.stringify(currentVotes));
}

// ── RENDER ────────────────────────────────────────────────────
function renderPage(pageIndex) {
  // Clamp just in case
  currentPage = Math.max(0, Math.min(pageIndex, CATEGORIES.length - 1));

  const container = document.getElementById("categories-container");
  container.innerHTML = "";

    // ── Page navigation controls
  const nav = document.createElement("div");
  nav.className = "page-nav";

  const isFirst = currentPage === 0;
  const isLast  = currentPage === CATEGORIES.length - 1;

  nav.innerHTML = `
    <button class="btn-page btn-prev" onclick="goToPage(${currentPage - 1})" ${isFirst ? "disabled" : ""}>
      ← Previous
    </button>

    <div class="page-nav-info">
      <span class="page-counter">${currentPage + 1} / ${CATEGORIES.length}</span>
      
      <div class="page-dots">${buildPageDots()}</div>

      <div class="custom-mobile-dropdown" id="category-dropdown">
        <button class="dropdown-btn" onclick="toggleMobileDropdown(event)">
          <span class="dropdown-text">
            ${currentPage + 1}. ${CATEGORIES[currentPage].name}
          </span>
          <span class="dropdown-icon">▼</span>
        </button>
        <ul class="dropdown-list" id="dropdown-list">
          ${CATEGORIES.map((cat, i) => {
            const isVoted = currentVotes[cat.id] !== undefined;
            const isActive = i === currentPage;
            return `
              <li class="dropdown-item ${isActive ? 'active' : ''}" onclick="selectFromDropdown(${i})">
                <span class="item-name">${i + 1}. ${cat.name}</span>
                ${isVoted ? '<span class="item-voted">✓</span>' : ''}
              </li>
            `;
          }).join("")}
        </ul>
      </div>
    </div>

    ${isLast
      ? `<button class="btn-page btn-submit-nav" onclick="submitAllVotes()">
          ${Object.keys(currentVotes).length === CATEGORIES.length ? "🏆 Submit Votes" : `⚠️ ${CATEGORIES.length - Object.keys(currentVotes).length} left`}
        </button>`
      : `<button class="btn-page btn-next" onclick="goToPage(${currentPage + 1})">Next →</button>`
    }
  `;

  container.appendChild(nav);

  const cat = CATEGORIES[currentPage];
  const votedIndex = currentVotes[cat.id];

  // ── Category section
  const section = document.createElement("section");
  section.className = "category-section" + (votedIndex !== undefined ? " has-voted" : "");
  section.id = `cat-${cat.id}`;
  section.dataset.filter = cat.filter;

  section.innerHTML = `
    <div class="category-header">
      <div class="category-number">${String(currentPage + 1).padStart(2, "0")}</div>
      <div class="category-title-wrap">
        <div class="category-tag">${cat.tag}</div>
        <h2 class="category-name">${cat.name}</h2>
        ${cat.description ? `<p class="category-description">${cat.description}</p>` : ""}
      </div>
      <div class="voted-badge ${votedIndex !== undefined ? "visible" : ""}" id="badge-${cat.id}">
        ✓ Voted
      </div>
    </div>
    <div class="nominees-grid" id="grid-${cat.id}">
      ${cat.nominees.map((nom, nomIndex) =>
        buildNomineeCard(cat, currentPage, nom, nomIndex, votedIndex)
      ).join("")}
    </div>
  `;
  container.appendChild(section);


  // Scroll to top of main content smoothly, accounting for fixed header
  const mainContent = document.getElementById("main-content");
  const isMobile = window.innerWidth <= 768;
  const headerOffset = isMobile ? 145 : 40;
  const elementPosition = mainContent.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });
}

// Builds a compact row of dots — one per category, filled if voted
function buildPageDots() {
  return CATEGORIES.map((cat, i) => {
    const voted   = currentVotes[cat.id] !== undefined;
    const active  = i === currentPage;
    let cls = "page-dot";
    if (active) cls += " active";
    if (voted)  cls += " voted";
    return `<span class="${cls}" title="${cat.name}" onclick="goToPage(${i})"></span>`;
  }).join("");
}

function buildNomineeCard(cat, catIndex, nom, nomIndex, votedIndex) {
  const isSelected = votedIndex === nomIndex;

  let mediaHTML = "";
  if (nom.image || nom.video) {
    mediaHTML = `
      <div class="card-media" id="media-${cat.id}-${nomIndex}">
        ${nom.image
          ? `<img class="card-thumbnail" src="${nom.image}" alt="${nom.name}" loading="lazy">`
          : `<div class="no-media-placeholder thumbnail-fallback"><span class="placeholder-icon">🎬</span></div>`
        }
        ${nom.video
          ? `<video src="${nom.video}" loop playsinline preload="none"></video>
             <button class="play-btn" onclick="toggleVideo(event, '${cat.id}', ${nomIndex})" title="Play/Pause clip"></button>`
          : ""
        }
        <div class="card-overlay"><div class="card-check">✓</div></div>
      </div>`;
  } else {
    mediaHTML = `
      <div class="card-media" id="media-${cat.id}-${nomIndex}">
        <div class="no-media-placeholder">
          <span class="placeholder-icon">🎬</span>
          <span>Media coming soon</span>
        </div>
        <div class="card-overlay"><div class="card-check">✓</div></div>
      </div>`;
  }

  return `
    <div class="nominee-card ${isSelected ? "selected" : ""}"
         id="card-${cat.id}-${nomIndex}"
         onclick="selectNominee('${cat.id}', ${nomIndex})">
      ${mediaHTML}
      <div class="card-info">
        <div class="card-anime-name">${nom.name}</div>
        ${nom.secondary ? `<div class="card-secondary">${nom.secondary}</div>` : ""}
      </div>
      <button class="card-vote-btn" onclick="selectNominee('${cat.id}', ${nomIndex}); event.stopPropagation()">
        ${isSelected ? "✓ Selected" : "Select"}
      </button>
    </div>`;
}

// ── NAVIGATION ────────────────────────────────────────────────
function goToPage(index) {
  if (index < 0 || index >= CATEGORIES.length) return;
  
  // Add a tiny 150ms delay so the user can see the CSS button animation
  setTimeout(() => {
    renderPage(index);
    updateProgressBar();
  }, 100);
}

// ── VOTING LOGIC ──────────────────────────────────────────────
function selectNominee(categoryId, nomineeIndex) {
  if (localStorage.getItem(CONFIG.VOTE_LOCK_KEY)) {
    document.getElementById("voted-modal").style.display = "flex";
    return;
  }

  const prevIndex = currentVotes[categoryId];

  if (prevIndex === nomineeIndex) {
    // Deselect
    delete currentVotes[categoryId];
    updateCardUI(categoryId, nomineeIndex, false);
    document.getElementById(`cat-${categoryId}`).classList.remove("has-voted");
    document.getElementById(`badge-${categoryId}`).classList.remove("visible");
  } else {
    if (prevIndex !== undefined) updateCardUI(categoryId, prevIndex, false);
    currentVotes[categoryId] = nomineeIndex;
    updateCardUI(categoryId, nomineeIndex, true);
    document.getElementById(`cat-${categoryId}`).classList.add("has-voted");
    document.getElementById(`badge-${categoryId}`).classList.add("visible");
  }

  saveVotesToStorage();
  updateProgressBar();

  // Refresh the dot row so the current dot lights up as voted immediately
  const dotsEl = document.querySelector(".page-dots");
  if (dotsEl) dotsEl.innerHTML = buildPageDots();
}

function updateCardUI(categoryId, nomineeIndex, selected) {
  const card = document.getElementById(`card-${categoryId}-${nomineeIndex}`);
  if (!card) return;
  const btn = card.querySelector(".card-vote-btn");
  if (selected) {
    card.classList.add("selected");
    if (btn) btn.textContent = "✓ Selected";
  } else {
    card.classList.remove("selected");
    if (btn) btn.textContent = "Select";
  }
}

// ── PROGRESS BAR ─────────────────────────────────────────────
function updateProgressBar() {
  const total = CATEGORIES.length;
  const voted = Object.keys(currentVotes).length;
  const pct   = (voted / total) * 100;

  document.getElementById("categories-voted").textContent = voted;
  document.getElementById("categories-total").textContent = total;
  document.getElementById("vote-progress-bar").style.width = pct + "%";
}

// ── VIDEO TOGGLE ──────────────────────────────────────────────
function toggleVideo(e, categoryId, nomineeIndex) {
  e.stopPropagation();
  const mediaEl = document.getElementById(`media-${categoryId}-${nomineeIndex}`);
  if (!mediaEl) return;

  const video = mediaEl.querySelector("video");
  const btn = mediaEl.querySelector(".play-btn");
  if (!video) return;

  if (mediaEl.classList.contains("playing")) {
    video.pause();
    mediaEl.classList.remove("playing");
    btn.classList.remove("playing");
  } else {
    // Pause any other playing videos first
    document.querySelectorAll(".card-media.playing").forEach(el => {
      el.querySelector("video")?.pause();
      el.classList.remove("playing");
      el.querySelector(".play-btn")?.classList.remove("playing");
    });

    // --- NEW LOGIC START ---
    // Find the category and nominee data to check for a custom start time
    const cat = CATEGORIES.find(c => c.id === categoryId);
    const nominee = cat?.nominees[nomineeIndex];
    
    // Only set currentTime if the video is at the very beginning (0)
    // and a custom startTime exists.
    if (video.currentTime === 0 && nominee && nominee.startTime) {
      video.currentTime = nominee.startTime;
    }
    // --- NEW LOGIC END ---

    video.play();
    mediaEl.classList.add("playing");
    btn.classList.add("playing");
  }
}

// ── SUBMIT FLOW ───────────────────────────────────────────────
function submitAllVotes() {
  if (localStorage.getItem(CONFIG.VOTE_LOCK_KEY)) {
    document.getElementById("voted-modal").style.display = "flex";
    return;
  }

  const unvotedCategories = CATEGORIES.filter(cat => currentVotes[cat.id] === undefined);

  if (unvotedCategories.length > 0) {
    // Find the first unvoted category and navigate there
    const firstUnvotedIndex = CATEGORIES.findIndex(cat => currentVotes[cat.id] === undefined);
    showToast(`⚠️ Please vote in all categories first! ${unvotedCategories.length} remaining.`, true);
    setTimeout(() => goToPage(firstUnvotedIndex), 600);
    return;
  }

  // All voted — build summary
  const summaryEl = document.getElementById("modal-vote-summary");
  let summaryHTML = "";

  CATEGORIES.forEach(cat => {
    const nominee = cat.nominees[currentVotes[cat.id]];
    summaryHTML += `
      <div class="vote-summary-item">
        <span class="summary-category">${cat.name}</span>
        <span class="summary-pick">${nominee.name}</span>
      </div>`;
  });

  summaryEl.innerHTML = summaryHTML;
  document.getElementById("modal-unvoted").style.display = "none";
  document.getElementById("submit-modal").style.display = "flex";
}

async function confirmSubmit() {
  const btn = document.getElementById("confirm-submit-btn");
  btn.innerHTML = "<span>Submitting... ⏳</span>";
  btn.disabled = true;

  try {
    await sendToGoogleSheets();
    localStorage.setItem(CONFIG.VOTE_LOCK_KEY, Date.now().toString());
    closeModal();
    showToast("🎉 Votes submitted! Results revealed at the ceremony.");

    document.querySelectorAll(".nominee-card:not(.selected)").forEach(c => {
      c.style.opacity = "0.4";
      c.style.pointerEvents = "none";
    });
  } catch (err) {
    btn.innerHTML = "<span>Submit Votes 🏆</span>";
    btn.disabled = false;
    showToast("❌ Submission failed. Please try again.", true);
    console.error("Submission error:", err);
  }
}

// ── GOOGLE SHEETS INTEGRATION ─────────────────────────────────
async function sendToGoogleSheets() {
  if (CONFIG.GOOGLE_SHEET_URL === "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE") {
    await new Promise(r => setTimeout(r, 800));
    console.log("DEV MODE — votes not actually sent:", currentVotes);
    return;
  }

  const payload = CATEGORIES.map(cat => {
    const votedIndex = currentVotes[cat.id];
    return {
      category: cat.name,
      nominee: votedIndex !== undefined ? cat.nominees[votedIndex].name : "",
    };
  });

  await fetch(CONFIG.GOOGLE_SHEET_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      timestamp: new Date().toISOString(),
      votes: payload,
    }),
  });
}

// ── TOAST ─────────────────────────────────────────────────────
function showToast(message, isError = false) {
  const toast = document.getElementById("toast");
  const msg   = document.getElementById("toast-msg");
  msg.textContent = message;
  toast.style.background   = isError ? "#3d1a1a" : "#1e3d25";
  toast.style.borderColor  = isError ? "#e03b3b" : "#3db87a";
  toast.style.color        = isError ? "#e03b3b" : "#3db87a";
  toast.style.display = "flex";
  setTimeout(() => { toast.style.display = "none"; }, 4000);
}

async function testSheetConnection() {
  const url = CONFIG.GOOGLE_SHEET_URL;
  if (url === "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE") {
    alert("URL not set in CONFIG!"); return;
  }
  try {
    await fetch(url + "?action=ping");
    alert("Fetch sent (no-cors mode means we can't read the response, but no error = likely working). Check your Sheet for a new row.");
  } catch(err) {
    alert("FAILED: " + err.message);
  }
}

// Modal
function closeModal() {
  const modal = document.getElementById("submit-modal");
  
  // 1. Add the CSS class to start the fadeOut/slideDown animations
  modal.classList.add("closing");

  // 2. Wait for the CSS animation to finish (200ms)
  setTimeout(() => {
    modal.style.display = "none";
    modal.classList.remove("closing"); // Reset for the next time it opens
  }, 200);
}

// 3. The "Click Outside" Trigger
window.addEventListener("click", (event) => {
  const modal = document.getElementById("submit-modal");
  // If the user clicks the dark overlay specifically (not the box inside)
  if (event.target === modal) {
    closeModal();
  }

  const dropdownList = document.getElementById("dropdown-list");
  if (dropdownList && dropdownList.classList.contains("show")) {
    const isClickInside = event.target.closest('.custom-mobile-dropdown');
    if (!isClickInside) {
      dropdownList.classList.remove("show");
    }
  }
});

// Dropdown
function toggleMobileDropdown(e) {
  e.stopPropagation(); // Prevent the window click listener from immediately closing it
  const list = document.getElementById("dropdown-list");
  list.classList.toggle("show");
}

function selectFromDropdown(index) {
  const list = document.getElementById("dropdown-list");
  list.classList.remove("show"); // Close menu
  goToPage(index); // Navigate
}

// ── DYNAMIC HEADER SCROLL ─────────────────────────────────────
window.addEventListener("scroll", () => {
  const header = document.querySelector(".site-header");
  
  if (window.scrollY > 80) {
    header.classList.add("compact");
  } else {
    header.classList.remove("compact");
  }
});

// ── SIDEBAR ───────────────────────────────────────────────────
function openSidebar() {
  document.getElementById("sidebar").classList.add("open");
  document.getElementById("sidebar-overlay").classList.add("visible");
  buildSidebarContent();
}

function closeSidebar() {
  document.getElementById("sidebar").classList.remove("open");
  document.getElementById("sidebar-overlay").classList.remove("visible");
}

function buildSidebarContent() {
  const body = document.getElementById("sidebar-body");

  // Group categories by their tag
  const groups = {};
  CATEGORIES.forEach((cat, i) => {
    if (!groups[cat.tag]) groups[cat.tag] = [];
    groups[cat.tag].push({ cat, i });
  });

  const groupOrder = ["General", "Craft", "Genre", "Character", "Music & Audio"];

  body.innerHTML = groupOrder.map(tag => {
    if (!groups[tag]) return "";
    const items = groups[tag].map(({ cat, i }) => {
      const isActive = i === currentPage;
      const isVoted  = currentVotes[cat.id] !== undefined;
      return `
        <li class="sidebar-item ${isActive ? "active" : ""}" onclick="goToPage(${i}); closeSidebar();">
          <span class="sidebar-item-name">${cat.name}</span>
          ${isVoted ? '<span class="sidebar-item-check">✓</span>' : ""}
        </li>`;
    }).join("");

    return `
      <div class="sidebar-group">
        <div class="sidebar-group-label">${tag}</div>
        <ul class="sidebar-group-list">${items}</ul>
      </div>`;
  }).join("");
}
