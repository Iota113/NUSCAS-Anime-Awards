// ============================================================
//  APP.JS — Main voting logic
//  Voting state: localStorage
//  Submission: Google Sheets via Apps Script Web App
// ============================================================

// ── CONFIG ───────────────────────────────────────────────────
const CONFIG = {
  // Paste your Google Apps Script Web App URL here after setup
  GOOGLE_SHEET_URL: "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE",

  // Change this to prevent duplicate submissions
  // "localStorage" = one vote per browser (default)
  VOTE_LOCK_KEY: "cas_anime_awards_submitted_v1",

  // Storage key for in-progress votes
  VOTES_STORAGE_KEY: "cas_anime_awards_votes_v1",
};

// ── STATE ─────────────────────────────────────────────────────
let currentVotes = {}; // { categoryId: nomineeIndex }

// ── INIT ──────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  loadVotesFromStorage();
  renderAllCategories();
  setupCategoryFilters();
  updateProgressBar();

  // If already submitted, show modal immediately
  if (localStorage.getItem(CONFIG.VOTE_LOCK_KEY)) {
    document.getElementById("voted-modal").style.display = "flex";
  }

  // Update total count
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
function renderAllCategories() {
  const container = document.getElementById("categories-container");
  container.innerHTML = "";

  CATEGORIES.forEach((cat, catIndex) => {
    const section = document.createElement("section");
    section.className = "category-section";
    section.id = `cat-${cat.id}`;
    section.dataset.filter = cat.filter;

    // Check if already voted for this category
    const votedIndex = currentVotes[cat.id];
    if (votedIndex !== undefined) section.classList.add("has-voted");

    section.innerHTML = `
      <div class="category-header">
        <div class="category-number">${String(catIndex + 1).padStart(2, "0")}</div>
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
        ${cat.nominees.map((nom, nomIndex) => buildNomineeCard(cat, catIndex, nom, nomIndex, votedIndex)).join("")}
      </div>
    `;

    container.appendChild(section);
  });
}

function buildNomineeCard(cat, catIndex, nom, nomIndex, votedIndex) {
  const isSelected = votedIndex === nomIndex;

  // Media section
  // Image always acts as the thumbnail/poster — always visible until video plays
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
        <div class="card-nominee-label">Nominee #${nomIndex + 1}</div>
      </div>
      <button class="card-vote-btn" onclick="selectNominee('${cat.id}', ${nomIndex}); event.stopPropagation()">
        ${isSelected ? "✓ Selected" : "Select"}
      </button>
    </div>`;
}

// ── VOTING LOGIC ──────────────────────────────────────────────
function selectNominee(categoryId, nomineeIndex) {
  // Already submitted — block further voting
  if (localStorage.getItem(CONFIG.VOTE_LOCK_KEY)) {
    document.getElementById("voted-modal").style.display = "flex";
    return;
  }

  const prevIndex = currentVotes[categoryId];

  // Deselect if clicking same card
  if (prevIndex === nomineeIndex) {
    delete currentVotes[categoryId];
    updateCardUI(categoryId, nomineeIndex, false);
    // Remove has-voted
    document.getElementById(`cat-${categoryId}`).classList.remove("has-voted");
    document.getElementById(`badge-${categoryId}`).classList.remove("visible");
  } else {
    // Deselect previous
    if (prevIndex !== undefined) {
      updateCardUI(categoryId, prevIndex, false);
    }
    // Select new
    currentVotes[categoryId] = nomineeIndex;
    updateCardUI(categoryId, nomineeIndex, true);
    document.getElementById(`cat-${categoryId}`).classList.add("has-voted");
    document.getElementById(`badge-${categoryId}`).classList.add("visible");
  }

  saveVotesToStorage();
  updateProgressBar();
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
  const pct = (voted / total) * 100;

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
    // Pause all other videos first
    document.querySelectorAll(".card-media.playing").forEach(el => {
      el.querySelector("video")?.pause();
      el.classList.remove("playing");
      el.querySelector(".play-btn")?.classList.remove("playing");
    });
    video.play();
    mediaEl.classList.add("playing");
    btn.classList.add("playing");
  }
}

// ── CATEGORY FILTER ───────────────────────────────────────────
function setupCategoryFilters() {
  document.querySelectorAll(".cat-filter").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".cat-filter").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;
      document.querySelectorAll(".category-section").forEach(sec => {
        if (filter === "all" || sec.dataset.filter === filter) {
          sec.classList.remove("hidden");
        } else {
          sec.classList.add("hidden");
        }
      });
    });
  });
}

// ── SUBMIT FLOW ───────────────────────────────────────────────
function submitAllVotes() {
  if (localStorage.getItem(CONFIG.VOTE_LOCK_KEY)) {
    document.getElementById("voted-modal").style.display = "flex";
    return;
  }

  // Build summary
  const summaryEl = document.getElementById("modal-vote-summary");
  const unvotedEl = document.getElementById("modal-unvoted");
  const unvotedTextEl = document.getElementById("unvoted-text");

  let summaryHTML = "";
  const unvotedCategories = [];

  CATEGORIES.forEach(cat => {
    const votedIndex = currentVotes[cat.id];
    if (votedIndex !== undefined) {
      const nominee = cat.nominees[votedIndex];
      summaryHTML += `
        <div class="vote-summary-item">
          <span class="summary-category">${cat.name}</span>
          <span class="summary-pick">${nominee.name}</span>
        </div>`;
    } else {
      unvotedCategories.push(cat.name);
      summaryHTML += `
        <div class="vote-summary-item">
          <span class="summary-category">${cat.name}</span>
          <span class="summary-novote">No vote</span>
        </div>`;
    }
  });

  summaryEl.innerHTML = summaryHTML;

  if (unvotedCategories.length > 0) {
    unvotedEl.style.display = "flex";
    unvotedTextEl.textContent = `You haven't voted in ${unvotedCategories.length} categor${unvotedCategories.length === 1 ? "y" : "ies"} yet. You can still submit — unvoted categories will be skipped.`;
  } else {
    unvotedEl.style.display = "none";
  }

  document.getElementById("submit-modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("submit-modal").style.display = "none";
}

async function confirmSubmit() {
  const btn = document.getElementById("confirm-submit-btn");
  btn.innerHTML = "<span>Submitting... ⏳</span>";
  btn.disabled = true;

  try {
    await sendToGoogleSheets();
    // Lock voting
    localStorage.setItem(CONFIG.VOTE_LOCK_KEY, Date.now().toString());
    closeModal();
    showToast("🎉 Votes submitted! Results revealed at the ceremony.");

    // Disable all cards visually
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
    // Dev mode: just simulate a delay
    await new Promise(r => setTimeout(r, 800));
    console.log("DEV MODE — votes not actually sent:", currentVotes);
    return;
  }

  // Build payload: array of { category, nominee }
  const payload = CATEGORIES.map(cat => {
    const votedIndex = currentVotes[cat.id];
    return {
      category: cat.name,
      nominee: votedIndex !== undefined ? cat.nominees[votedIndex].name : "",
    };
  });

  const response = await fetch(CONFIG.GOOGLE_SHEET_URL, {
    method: "POST",
    mode: "no-cors", // Google Apps Script requires no-cors
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      timestamp: new Date().toISOString(),
      votes: payload,
    }),
  });

  // no-cors means we can't read the response, but if no error thrown it succeeded
}

// ── TOAST ─────────────────────────────────────────────────────
function showToast(message, isError = false) {
  const toast = document.getElementById("toast");
  const msg = document.getElementById("toast-msg");
  msg.textContent = message;
  toast.style.background = isError ? "#3d1a1a" : "#1e3d25";
  toast.style.borderColor = isError ? "#e03b3b" : "#3db87a";
  toast.style.color = isError ? "#e03b3b" : "#3db87a";
  toast.style.display = "flex";
  setTimeout(() => { toast.style.display = "none"; }, 4000);
}
