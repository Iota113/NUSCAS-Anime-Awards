// ============================================================
//  APP.JS — CEREMONY BRANCH (Winners Default View)
// ============================================================

// ── STATE ─────────────────────────────────────────────────────
let currentPage = 0;

// ── INIT ──────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("categories-total").textContent = CATEGORIES.length;
  renderPage(currentPage);
  updateProgressBar();
});

// ── RENDER ────────────────────────────────────────────────────
function renderPage(pageIndex) {
  currentPage = Math.max(0, Math.min(pageIndex, CATEGORIES.length - 1));

  const container = document.getElementById("categories-container");
  container.innerHTML = "";

  const isFirst = currentPage === 0;
  const isLast  = currentPage === CATEGORIES.length - 1;

  // ── Page navigation
  const nav = document.createElement("div");
  nav.className = "page-nav";
  nav.innerHTML = `
    <button class="btn-page btn-prev" onclick="goToPage(${currentPage - 1})" ${isFirst ? "disabled" : ""}>
      ← Previous
    </button>

    <div class="page-nav-info">
      <span class="page-counter">${currentPage + 1} / ${CATEGORIES.length}</span>
      <div class="page-dots">${buildPageDots()}</div>
    </div>

    <button class="btn-page btn-next" onclick="goToPage(${currentPage + 1})" ${isLast ? "disabled" : ""}>
      Next →
    </button>
  `;
  container.appendChild(nav);

  const cat = CATEGORIES[currentPage];
  const winnerNominee = cat.winner
    ? cat.nominees.find(n => n.name === cat.winner)
    : null;
  const isRevealed = !!winnerNominee; // If there's a winner, it's revealed by default

  // ── Category section
  const section = document.createElement("section");
  section.className = "category-section" + (isRevealed ? " winner-revealed" : "");
  section.id = `cat-${cat.id}`;

  section.innerHTML = `
    <div class="category-header">
      <div class="category-number">${String(currentPage + 1).padStart(2, "0")}</div>
      <div class="category-title-wrap">
        <div class="category-tag">${cat.tag}</div>
        <h2 class="category-name">${cat.name}</h2>
        ${cat.description ? `<p class="category-description">${cat.description}</p>` : ""}
      </div>
    </div>

    <div class="nominees-grid" id="grid-${cat.id}">
      ${cat.nominees.map((nom, nomIndex) =>
        buildNomineeCard(cat, nom, nomIndex, isRevealed, winnerNominee)
      ).join("")}
    </div>
  `; // Removed the entire reveal-btn-wrap

  container.appendChild(section);
}

function buildPageDots() {
  return CATEGORIES.map((cat, i) => {
    const revealed = !!cat.winner; 
    const active   = i === currentPage;
    let cls = "page-dot";
    if (active)   cls += " active";
    if (revealed) cls += " voted"; 
    return `<span class="${cls}" title="${cat.name}" onclick="goToPage(${i})"></span>`;
  }).join("");
}

function buildNomineeCard(cat, nom, nomIndex, isRevealed, winnerNominee) {
  const isWinner = isRevealed && winnerNominee && nom.name === winnerNominee.name;
  const isLoser  = isRevealed && winnerNominee && nom.name !== winnerNominee.name;

  let mediaHTML = "";
  const hasMedia = nom.image || nom.video;

  if (hasMedia) {
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
        ${isWinner ? `<div class="winner-badge-overlay">🏆 WINNER</div>` : ""}
      </div>`;
  } else {
    mediaHTML = `
      <div class="card-media" id="media-${cat.id}-${nomIndex}">
        <div class="no-media-placeholder">
          <span class="placeholder-icon">🎬</span>
          <span>Media coming soon</span>
        </div>
        ${isWinner ? `<div class="winner-badge-overlay">🏆 WINNER</div>` : ""}
      </div>`;
  }

  let cardClass = "nominee-card";
  if (isWinner) cardClass += " card-winner";
  if (isLoser)  cardClass += " card-loser";

  // ── VOTE DISTRIBUTION UI ──────────────────────────────────────
  let voteHTML = "";
  if (isRevealed && nom.percentage !== undefined) {
    voteHTML = `
      <div class="vote-distribution">
        <div class="vote-bar" style="width: ${nom.percentage}%;"></div>
        <span class="vote-text">${nom.percentage}%</span>
      </div>
    `;
  }

  return `
    <div class="${cardClass}" id="card-${cat.id}-${nomIndex}">
      ${mediaHTML}
      <div class="card-info">
        <div class="card-anime-name">${nom.name}</div>
        ${nom.secondary ? `<div class="card-secondary">${nom.secondary}</div>` : ""}
        ${voteHTML}
      </div>
    </div>`;
}

// ── NAVIGATION ────────────────────────────────────────────────
function goToPage(index) {
  if (index < 0 || index >= CATEGORIES.length) return;
  setTimeout(() => {
    renderPage(index);
    updateProgressBar();
  }, 100);
}

// ── PROGRESS BAR ─────────────────────────────────────────────
function updateProgressBar() {
  const total    = CATEGORIES.length;
  const revealed = CATEGORIES.filter(c => c.winner).length; // Calculate directly from data
  const pct      = (revealed / total) * 100;

  document.getElementById("categories-revealed").textContent = revealed;
  document.getElementById("categories-total").textContent    = total;
  document.getElementById("reveal-progress-bar").style.width = pct + "%";
}

// ── VIDEO TOGGLE ──────────────────────────────────────────────
function toggleVideo(e, categoryId, nomineeIndex) {
  e.stopPropagation();
  const mediaEl = document.getElementById(`media-${categoryId}-${nomineeIndex}`);
  if (!mediaEl) return;

  const video = mediaEl.querySelector("video");
  const btn   = mediaEl.querySelector(".play-btn");
  if (!video) return;

  if (mediaEl.classList.contains("playing")) {
    video.pause();
    mediaEl.classList.remove("playing");
    btn.classList.remove("playing");
  } else {
    document.querySelectorAll(".card-media.playing").forEach(el => {
      el.querySelector("video")?.pause();
      el.classList.remove("playing");
      el.querySelector(".play-btn")?.classList.remove("playing");
    });

    const cat = CATEGORIES.find(c => c.id === categoryId);
    const nominee = cat?.nominees[nomineeIndex];
    if (video.currentTime === 0 && nominee?.startTime) {
      video.currentTime = nominee.startTime;
    }

    video.play();
    mediaEl.classList.add("playing");
    btn.classList.add("playing");
  }
}

// ── TOAST ─────────────────────────────────────────────────────
function showToast(message, isError = false) {
  const toast = document.getElementById("toast");
  const msg   = document.getElementById("toast-msg");
  msg.textContent = message;
  toast.style.background  = isError ? "#3d1a1a" : "#1e3d25";
  toast.style.borderColor = isError ? "#e03b3b" : "#3db87a";
  toast.style.color       = isError ? "#e03b3b" : "#3db87a";
  toast.style.display = "flex";
  setTimeout(() => { toast.style.display = "none"; }, 4000);
}

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

  const groups = {};
  CATEGORIES.forEach((cat, i) => {
    if (!groups[cat.tag]) groups[cat.tag] = [];
    groups[cat.tag].push({ cat, i });
  });

  const groupOrder = ["General", "Craft", "Genre", "Character", "Music & Audio"];

  body.innerHTML = groupOrder.map(tag => {
    if (!groups[tag]) return "";
    const items = groups[tag].map(({ cat, i }) => {
      const isActive   = i === currentPage;
      const isRevealed = !!cat.winner;
      return `
        <li class="sidebar-item ${isActive ? "active" : ""}" onclick="goToPage(${i}); closeSidebar();">
          <span class="sidebar-item-name">${cat.name}</span>
          ${isRevealed ? '<span class="sidebar-item-check">🏆</span>' : ""}
        </li>`;
    }).join("");

    return `
      <div class="sidebar-group">
        <div class="sidebar-group-label">${tag}</div>
        <ul class="sidebar-group-list">${items}</ul>
      </div>`;
  }).join("");
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