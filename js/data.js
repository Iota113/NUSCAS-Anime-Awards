// ============================================================
//  DATA.JS — Edit this file to add/change nominees
//  
//  For each nominee:
//    name: "Anime Title"
//    image: "path/to/image.jpg"  OR  "" for placeholder
//    video: "path/to/clip.mp4"   OR  "" for no video
//    secondary: "e.g. Character name or studio" (optional)

// Example:
// {
// name: "Frieren: Beyond Journey's End",
// image: "assets/images/frieren.jpg",    ← path to image file
// video: "assets/clips/frieren.mp4",     ← path to video clip (or "" for none)
// secondary: "Madhouse"                  ← studio / character / artist info
// }
// Images: save to assets/images/ folder
// Videos: save to assets/clips/ folder (keep clips short: 15–30 seconds)
// ============================================================

const CATEGORIES = [
  // ── GENERAL ─────────────────────────────────────────────
  {
    id: "best-anime",
    tag: "General",
    filter: "general",
    name: "Best Anime",
    description: "The greatest anime of all time, voted by you.",
    nominees: [
      { name: "Frieren: Beyond Journey's End", 
        image: "assets/images/egofm-trailer_frieren_c_01", 
        video: "assets/clips/Frieren Beyond Journey's End「AMV」- Still Here [4K-Edit] - Hagen AMV's (1080p, h264).mp4", 
        secondary: "Madhouse" 
      },
      { name: "Uma Musume: Cinderella Grey", image: "assets/images/uma", video: "", secondary: "" },
      { name: "Anime Title 3", image: "", video: "", secondary: "" },
      { name: "Anime Title 4", image: "", video: "", secondary: "" },
      { name: "Anime Title 5", image: "", video: "", secondary: "" },
      { name: "Anime Title 6", image: "", video: "", secondary: "" },
    ]
  },
  {
    id: "anime-of-the-year",
    tag: "General",
    filter: "general",
    name: "Anime of the Year (2025)",
    description: "The standout anime series or film from 2025.",
    nominees: [
      { name: "Anime Title 1", image: "", video: "", secondary: "" },
      { name: "Anime Title 2", image: "", video: "", secondary: "" },
      { name: "Anime Title 3", image: "", video: "", secondary: "" },
      { name: "Anime Title 4", image: "", video: "", secondary: "" },
      { name: "Anime Title 5", image: "", video: "", secondary: "" },
      { name: "Anime Title 6", image: "", video: "", secondary: "" },
    ]
  },
  {
    id: "best-film",
    tag: "General",
    filter: "general",
    name: "Best Film",
    description: "The best theatrical anime film.",
    nominees: [
      { name: "Film Title 1", image: "", video: "", secondary: "" },
      { name: "Film Title 2", image: "", video: "", secondary: "" },
      { name: "Film Title 3", image: "", video: "", secondary: "" },
      { name: "Film Title 4", image: "", video: "", secondary: "" },
      { name: "Film Title 5", image: "", video: "", secondary: "" },
      { name: "Film Title 6", image: "", video: "", secondary: "" },
    ]
  },
  {
    id: "best-continuing-series",
    tag: "General",
    filter: "general",
    name: "Best Continuing Series",
    description: "The best anime series that has been running for multiple years.",
    nominees: [
      { name: "Anime Title 1", image: "", video: "", secondary: "" },
      { name: "Anime Title 2", image: "", video: "", secondary: "" },
      { name: "Anime Title 3", image: "", video: "", secondary: "" },
      { name: "Anime Title 4", image: "", video: "", secondary: "" },
      { name: "Anime Title 5", image: "", video: "", secondary: "" },
      { name: "Anime Title 6", image: "", video: "", secondary: "" },
    ]
  },
  {
    id: "best-new-series",
    tag: "General",
    filter: "general",
    name: "Best New Series (2026)",
    description: "The best anime series that premiered in 2026.",
    nominees: [
      { name: "Anime Title 1", image: "", video: "", secondary: "" },
      { name: "Anime Title 2", image: "", video: "", secondary: "" },
      { name: "Anime Title 3", image: "", video: "", secondary: "" },
      { name: "Anime Title 4", image: "", video: "", secondary: "" },
      { name: "Anime Title 5", image: "", video: "", secondary: "" },
      { name: "Anime Title 6", image: "", video: "", secondary: "" },
    ]
  },
  {
    id: "best-original-anime",
    tag: "General",
    filter: "general",
    name: "Best Original Anime",
    description: "Best anime with an original story — not based on manga, light novel, or game.",
    nominees: [
      { name: "Anime Title 1", image: "", video: "", secondary: "" },
      { name: "Anime Title 2", image: "", video: "", secondary: "" },
      { name: "Anime Title 3", image: "", video: "", secondary: "" },
      { name: "Anime Title 4", image: "", video: "", secondary: "" },
      { name: "Anime Title 5", image: "", video: "", secondary: "" },
      { name: "Anime Title 6", image: "", video: "", secondary: "" },
    ]
  },

  // ── CRAFT ────────────────────────────────────────────────
  {
    id: "best-animation",
    tag: "Craft",
    filter: "craft",
    name: "Best Animation",
    description: "Celebrating the most fluid, expressive, and visually stunning animation.",
    nominees: [
      { name: "Anime Title 1", image: "", video: "", secondary: "" },
      { name: "Anime Title 2", image: "", video: "", secondary: "" },
      { name: "Anime Title 3", image: "", video: "", secondary: "" },
      { name: "Anime Title 4", image: "", video: "", secondary: "" },
      { name: "Anime Title 5", image: "", video: "", secondary: "" },
      { name: "Anime Title 6", image: "", video: "", secondary: "" },
    ]
  },
  {
    id: "best-character-design",
    tag: "Craft",
    filter: "craft",
    name: "Best Character Design",
    description: "The most iconic, distinctive, or beautifully crafted character designs.",
    nominees: [
      { name: "Anime Title 1", image: "", video: "", secondary: "" },
      { name: "Anime Title 2", image: "", video: "", secondary: "" },
      { name: "Anime Title 3", image: "", video: "", secondary: "" },
      { name: "Anime Title 4", image: "", video: "", secondary: "" },
      { name: "Anime Title 5", image: "", video: "", secondary: "" },
      { name: "Anime Title 6", image: "", video: "", secondary: "" },
    ]
  },
  {
    id: "best-director",
    tag: "Craft",
    filter: "craft",
    name: "Best Director",
    description: "Recognising exceptional vision and direction in anime.",
    nominees: [
      { name: "Director Name 1", image: "", video: "", secondary: "Series / Film" },
      { name: "Director Name 2", image: "", video: "", secondary: "Series / Film" },
      { name: "Director Name 3", image: "", video: "", secondary: "Series / Film" },
      { name: "Director Name 4", image: "", video: "", secondary: "Series / Film" },
      { name: "Director Name 5", image: "", video: "", secondary: "Series / Film" },
      { name: "Director Name 6", image: "", video: "", secondary: "Series / Film" },
    ]
  },
  {
    id: "best-background-art",
    tag: "Craft",
    filter: "craft",
    name: "Best Background Art",
    description: "Stunning environmental and background artwork that brings worlds to life.",
    nominees: [
      { name: "Anime Title 1", image: "", video: "", secondary: "" },
      { name: "Anime Title 2", image: "", video: "", secondary: "" },
      { name: "Anime Title 3", image: "", video: "", secondary: "" },
      { name: "Anime Title 4", image: "", video: "", secondary: "" },
      { name: "Anime Title 5", image: "", video: "", secondary: "" },
      { name: "Anime Title 6", image: "", video: "", secondary: "" },
    ]
  },

  // ── GENRE ────────────────────────────────────────────────
  {
    id: "best-romance",
    tag: "Genre",
    filter: "genre",
    name: "Best Romance",
    description: "The most heartfelt and compelling romantic anime.",
    nominees: [
      { name: "Anime Title 1", image: "", video: "", secondary: "" },
      { name: "Anime Title 2", image: "", video: "", secondary: "" },
      { name: "Anime Title 3", image: "", video: "", secondary: "" },
      { name: "Anime Title 4", image: "", video: "", secondary: "" },
      { name: "Anime Title 5", image: "", video: "", secondary: "" },
      { name: "Anime Title 6", image: "", video: "", secondary: "" },
    ]
  },
  {
    id: "best-comedy",
    tag: "Genre",
    filter: "genre",
    name: "Best Comedy",
    description: "The funniest anime that had you laughing out loud.",
    nominees: [
      { name: "Anime Title 1", image: "", video: "", secondary: "" },
      { name: "Anime Title 2", image: "", video: "", secondary: "" },
      { name: "Anime Title 3", image: "", video: "", secondary: "" },
      { name: "Anime Title 4", image: "", video: "", secondary: "" },
      { name: "Anime Title 5", image: "", video: "", secondary: "" },
      { name: "Anime Title 6", image: "", video: "", secondary: "" },
    ]
  },
  {
    id: "best-action",
    tag: "Genre",
    filter: "genre",
    name: "Best Action",
    description: "The most thrilling and well-choreographed action sequences.",
    nominees: [
      { name: "Anime Title 1", image: "", video: "", secondary: "" },
      { name: "Anime Title 2", image: "", video: "", secondary: "" },
      { name: "Anime Title 3", image: "", video: "", secondary: "" },
      { name: "Anime Title 4", image: "", video: "", secondary: "" },
      { name: "Anime Title 5", image: "", video: "", secondary: "" },
      { name: "Anime Title 6", image: "", video: "", secondary: "" },
    ]
  },
  {
    id: "best-isekai",
    tag: "Genre",
    filter: "genre",
    name: "Best Isekai Anime",
    description: "The best anime featuring characters transported to another world.",
    nominees: [
      { name: "Anime Title 1", image: "", video: "", secondary: "" },
      { name: "Anime Title 2", image: "", video: "", secondary: "" },
      { name: "Anime Title 3", image: "", video: "", secondary: "" },
      { name: "Anime Title 4", image: "", video: "", secondary: "" },
      { name: "Anime Title 5", image: "", video: "", secondary: "" },
      { name: "Anime Title 6", image: "", video: "", secondary: "" },
    ]
  },
  {
    id: "best-drama",
    tag: "Genre",
    filter: "genre",
    name: "Best Drama",
    description: "The most emotionally gripping and dramatically compelling anime.",
    nominees: [
      { name: "Anime Title 1", image: "", video: "", secondary: "" },
      { name: "Anime Title 2", image: "", video: "", secondary: "" },
      { name: "Anime Title 3", image: "", video: "", secondary: "" },
      { name: "Anime Title 4", image: "", video: "", secondary: "" },
      { name: "Anime Title 5", image: "", video: "", secondary: "" },
      { name: "Anime Title 6", image: "", video: "", secondary: "" },
    ]
  },
  {
    id: "best-slice-of-life",
    tag: "Genre",
    filter: "genre",
    name: "Best Slice of Life",
    description: "Celebrating the warmth, simplicity, and beauty of everyday anime.",
    nominees: [
      { name: "Anime Title 1", image: "", video: "", secondary: "" },
      { name: "Anime Title 2", image: "", video: "", secondary: "" },
      { name: "Anime Title 3", image: "", video: "", secondary: "" },
      { name: "Anime Title 4", image: "", video: "", secondary: "" },
      { name: "Anime Title 5", image: "", video: "", secondary: "" },
      { name: "Anime Title 6", image: "", video: "", secondary: "" },
    ]
  },

  // ── CHARACTER ────────────────────────────────────────────
  {
    id: "best-main-character",
    tag: "Character",
    filter: "character",
    name: "Best Main Character",
    description: "The most compelling, well-written main protagonist.",
    nominees: [
      { name: "Character Name 1", image: "", video: "", secondary: "Anime Title" },
      { name: "Character Name 2", image: "", video: "", secondary: "Anime Title" },
      { name: "Character Name 3", image: "", video: "", secondary: "Anime Title" },
      { name: "Character Name 4", image: "", video: "", secondary: "Anime Title" },
      { name: "Character Name 5", image: "", video: "", secondary: "Anime Title" },
      { name: "Character Name 6", image: "", video: "", secondary: "Anime Title" },
    ]
  },
  {
    id: "best-supporting-character",
    tag: "Character",
    filter: "character",
    name: "Best Supporting Character",
    description: "The supporting character who stole the show.",
    nominees: [
      { name: "Character Name 1", image: "", video: "", secondary: "Anime Title" },
      { name: "Character Name 2", image: "", video: "", secondary: "Anime Title" },
      { name: "Character Name 3", image: "", video: "", secondary: "Anime Title" },
      { name: "Character Name 4", image: "", video: "", secondary: "Anime Title" },
      { name: "Character Name 5", image: "", video: "", secondary: "Anime Title" },
      { name: "Character Name 6", image: "", video: "", secondary: "Anime Title" },
    ]
  },
  {
    id: "must-protect",
    tag: "Character",
    filter: "character",
    name: '"Must Protect At All Costs" Character',
    description: "The character everyone felt an overwhelming urge to protect.",
    nominees: [
      { name: "Character Name 1", image: "", video: "", secondary: "Anime Title" },
      { name: "Character Name 2", image: "", video: "", secondary: "Anime Title" },
      { name: "Character Name 3", image: "", video: "", secondary: "Anime Title" },
      { name: "Character Name 4", image: "", video: "", secondary: "Anime Title" },
      { name: "Character Name 5", image: "", video: "", secondary: "Anime Title" },
      { name: "Character Name 6", image: "", video: "", secondary: "Anime Title" },
    ]
  },

  // ── MUSIC & AUDIO ────────────────────────────────────────
  {
    id: "best-anime-song",
    tag: "Music & Audio",
    filter: "music",
    name: "Best Anime Song",
    description: "The most memorable and beloved song from an anime.",
    nominees: [
      { name: "Song Title 1", image: "", video: "", secondary: "Artist · Anime Title" },
      { name: "Song Title 2", image: "", video: "", secondary: "Artist · Anime Title" },
      { name: "Song Title 3", image: "", video: "", secondary: "Artist · Anime Title" },
      { name: "Song Title 4", image: "", video: "", secondary: "Artist · Anime Title" },
      { name: "Song Title 5", image: "", video: "", secondary: "Artist · Anime Title" },
      { name: "Song Title 6", image: "", video: "", secondary: "Artist · Anime Title" },
    ]
  },
  {
    id: "best-score",
    tag: "Music & Audio",
    filter: "music",
    name: "Best Score",
    description: "The best original soundtrack and score composition in an anime.",
    nominees: [
      { name: "Anime Title 1", image: "", video: "", secondary: "Composer Name" },
      { name: "Anime Title 2", image: "", video: "", secondary: "Composer Name" },
      { name: "Anime Title 3", image: "", video: "", secondary: "Composer Name" },
      { name: "Anime Title 4", image: "", video: "", secondary: "Composer Name" },
      { name: "Anime Title 5", image: "", video: "", secondary: "Composer Name" },
      { name: "Anime Title 6", image: "", video: "", secondary: "Composer Name" },
    ]
  },
  {
    id: "best-opening",
    tag: "Music & Audio",
    filter: "music",
    name: "Best Opening Sequence",
    description: "The opening sequence you never skipped.",
    nominees: [
      { name: "OP Title / Anime 1", image: "", video: "", secondary: "Artist" },
      { name: "OP Title / Anime 2", image: "", video: "", secondary: "Artist" },
      { name: "OP Title / Anime 3", image: "", video: "", secondary: "Artist" },
      { name: "OP Title / Anime 4", image: "", video: "", secondary: "Artist" },
      { name: "OP Title / Anime 5", image: "", video: "", secondary: "Artist" },
      { name: "OP Title / Anime 6", image: "", video: "", secondary: "Artist" },
    ]
  },
  {
    id: "best-ending",
    tag: "Music & Audio",
    filter: "music",
    name: "Best Ending Sequence",
    description: "The ending sequence that gave you the perfect send-off each episode.",
    nominees: [
      { name: "ED Title / Anime 1", image: "", video: "", secondary: "Artist" },
      { name: "ED Title / Anime 2", image: "", video: "", secondary: "Artist" },
      { name: "ED Title / Anime 3", image: "", video: "", secondary: "Artist" },
      { name: "ED Title / Anime 4", image: "", video: "", secondary: "Artist" },
      { name: "ED Title / Anime 5", image: "", video: "", secondary: "Artist" },
      { name: "ED Title / Anime 6", image: "", video: "", secondary: "Artist" },
    ]
  },
  {
    id: "best-va-jp",
    tag: "Music & Audio",
    filter: "music",
    name: "Best Voice Artist Performance (Japanese)",
    description: "Outstanding voice acting performance in the Japanese dub.",
    nominees: [
      { name: "VA Name 1", image: "", video: "", secondary: "Character · Anime Title" },
      { name: "VA Name 2", image: "", video: "", secondary: "Character · Anime Title" },
      { name: "VA Name 3", image: "", video: "", secondary: "Character · Anime Title" },
      { name: "VA Name 4", image: "", video: "", secondary: "Character · Anime Title" },
      { name: "VA Name 5", image: "", video: "", secondary: "Character · Anime Title" },
      { name: "VA Name 6", image: "", video: "", secondary: "Character · Anime Title" },
    ]
  },
  {
    id: "best-va-en",
    tag: "Music & Audio",
    filter: "music",
    name: "Best Voice Artist Performance (English)",
    description: "Outstanding voice acting performance in the English dub.",
    nominees: [
      { name: "VA Name 1", image: "", video: "", secondary: "Character · Anime Title" },
      { name: "VA Name 2", image: "", video: "", secondary: "Character · Anime Title" },
      { name: "VA Name 3", image: "", video: "", secondary: "Character · Anime Title" },
      { name: "VA Name 4", image: "", video: "", secondary: "Character · Anime Title" },
      { name: "VA Name 5", image: "", video: "", secondary: "Character · Anime Title" },
      { name: "VA Name 6", image: "", video: "", secondary: "Character · Anime Title" },
    ]
  },
];
