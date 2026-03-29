// ============================================================
//  DATA.JS — Edit this file to add/change nominees
//  
//  For each nominee:
//    id: "Unique storage/database ID"
//    tag: "Category Label"
//    name: "Anime Title"
//    description: "Short Sentence Description"
//    image: "path/to/image.jpg"  OR  "" for placeholder
//    video: "path/to/clip.mp4"  OR  "" for no video
//    secondary: "e.g. Character name or studio" (optional)
// ============================================================
const CATEGORIES = [

  // ── GENERAL ─────────────────────────────────────────────
  {
    id: "best-anime",
    tag: "General",
    name: "Best Anime of All Time",
    description: "The greatest anime series ever made — a timeless masterpiece that defines the medium.",
    nominees: [
      { name: "Clannad", image: "assets/images/compressed/clannad.webp", video: "", secondary: "Kyoto Animation" },
      { name: "Death Note", image: "assets/images/compressed/death_note.webp", video: "", secondary: "Madhouse" },
      { name: "Frieren: Beyond Journey's End", image: "assets/images/compressed/frieren.webp", video: "", secondary: "Madhouse" },
      { name: "Fullmetal Alchemist: Brotherhood", image: "assets/images/compressed/fmab.webp", video: "", secondary: "Bones" },
      { name: "Neon Genesis Evangelion", image: "assets/images/compressed/eva.webp", video: "", secondary: "Gainax, Tatsunoko Production" },
    ]
  },

  {
    id: "anime-of-the-year",
    tag: "General",
    name: "Anime of the Year (2025)",
    description: "The standout anime that dominated 2025 — the one everyone was talking about.",
    nominees: [
      { name: "Apocalypse Hotel", image: "assets/images/compressed/apocalypse_hotel.webp", video: "", secondary: "C2C" },
      { name: "My Hero Academia Final Season", image: "assets/images/compressed/mha_final.webp", video: "", secondary: "Bones Film" },
      { name: "The Apothecary Diaries Season 2", image: "assets/images/compressed/apothecary_diaries.webp", video: "", secondary: "OLM, TOHO Animation" },
      { name: "Takopi's Original Sin", image: "assets/images/compressed/takopi.webp", video: "", secondary: "ENISHIYA" },
      { name: "The Summer Hikaru Died", image: "assets/images/compressed/the_summer_hikaru_died.webp", video: "", secondary: "CygamesPictures" },
    ]
  },

  {
    id: "best-film",
    tag: "General",
    name: "Best Film of All Time",
    description: "The greatest anime film ever — a cinematic achievement that transcends the screen.",
    nominees: [
      { name: "Liz and the Blue Bird", image: "assets/images/compressed/liz_and_blue_bird.webp", video: "", secondary: "Kyoto Animation" },
      { name: "Look Back", image: "assets/images/compressed/lookback.webp", video: "", secondary: "Studio Durian" },
      { name: "Paprika", image: "assets/images/compressed/paprika.webp", video: "", secondary: "Madhouse" },
      { name: "Spirited Away", image: "assets/images/compressed/spirited_away.webp", video: "", secondary: "Studio Ghibli" },
      { name: "Your Name", image: "assets/images/compressed/your_name.webp", video: "", secondary: "CoMix Wave Films" },
    ]
  },

  {
    id: "film-of-the-year",
    tag: "General",
    name: "Film of the Year (2025 - 2026)",
    description: "The best theatrical anime release from the 2025–2026 period.",
    nominees: [
      { name: "100 Meters", image: "assets/images/compressed/100m.webp", video: "", secondary: "Rock 'n' Roll Mountain" },
      { name: "Chainsaw Man – The Movie: Reze Arc", image: "assets/images/compressed/csm.webp", video: "", secondary: "MAPPA" },
      { name: "Colorful Stage! The Movie: A Miku Who Can't Sing", image: "assets/images/compressed/miku.webp", video: "", secondary: "P.A. Works" },
      { name: "Cosmic Princess Kaguya!", image: "assets/images/compressed/cosmic_princess.webp", video: "", secondary: "Studio Colorido, Studio Chromato" },
      { name: "Demon Slayer: Kimetsu no Yaiba – The Movie: Infinity Castle", image: "assets/images/compressed/infinity_castle.webp", video: "", secondary: "ufotable" },
    ]
  },

  {
    id: "best-continuing-series",
    tag: "General",
    name: "Best Continuing Series (2026)",
    description: "The best returning series airing in 2026 that keeps delivering season after season.",
    nominees: [
      { name: "Frieren: Beyond Journey's End Season 2", image: "assets/images/compressed/frieren_2.webp", secondary: "Madhouse" },
      { name: "JoJo's Bizarre Adventure: Steel Ball Run", image: "assets/images/compressed/sbr.webp", secondary: "David Production" },
      { name: "Medalist Season 2", image: "assets/images/compressed/medalist_2.webp", secondary: "ENGI" },
      { name: "One Piece", image: "assets/images/compressed/one_piece.webp", secondary: "Toei Animation" },
      { name: "Oshi no Ko Season 3", image: "assets/images/compressed/oshi_no_ko.webp", secondary: "Doga Kobo" },
    ]
  },

  {
    id: "best-new-series",
    tag: "General",
    name: "Best New Series (2026)",
    description: "The freshest debut of 2026 — a new series that hit the ground running.",
    nominees: [
      { name: "Fate/strange Fake", image: "assets/images/compressed/fsf.webp", secondary: "A-1 Pictures" },
      { name: "Journal with Witch", image: "assets/images/compressed/journal_with_witch.webp", secondary: "Shuka" },
      { name: "Kaya-chan Isn't Scary", image: "assets/images/compressed/kaya_chan.webp", secondary: "East Fish Studio" },
      { name: "Shiboyugi: Playing Death Games to Put Food on the Table", image: "assets/images/compressed/shiboyugi.webp", secondary: "Studio Deen" },
      { name: "You and I Are Polar Opposites", image: "assets/images/compressed/polar_opp.webp", secondary: "Lapin Track" },
    ]
  },

  {
    id: "best-original-anime",
    tag: "General",
    name: "Best Original Anime",
    description: "Best anime with a story original to the screen — not adapted from manga, light novel, or game.",
    nominees: [
      { name: "Angel Beats!", image: "assets/images/compressed/angel_beats.webp", video: "", secondary: "P.A. Works" },
      { name: "Code Geass", image: "assets/images/compressed/code_geass.webp", secondary: "Sunrise" },
      { name: "Kill la Kill", image: "assets/images/compressed/kill_la_kill.webp", video: "", secondary: "Trigger" },
      { name: "Vivy: Fluorite Eye's Song", image: "assets/images/compressed/vivy.webp", video: "", secondary: "Wit Studio" },
      { name: "Shirobako", image: "assets/images/compressed/shirobako.webp", video: "", secondary: "P.A. Works" },
    ]
  },

  // ── CRAFT ────────────────────────────────────────────────
  {
    id: "best-animation",
    tag: "Craft",
    name: "Best Animation",
    description: "The most fluid, expressive, and visually breathtaking animation on screen.",
    nominees: [
      { name: "Frieren: Beyond Journey's End", image: "assets/images/compressed/frieren.webp", video: "", secondary: "Madhouse" },
      { name: "Jujutsu Kaisen", image: "assets/images/compressed/jjk.webp", video: "", secondary: "MAPPA" },
      { name: "March Comes in Like a Lion", image: "assets/images/compressed/march_lion.webp", video: "", secondary: "Shaft" },
      { name: "Violet Evergarden", image: "assets/images/compressed/violet_evergarden.webp", video: "", secondary: "Kyoto Animation" },
      { name: "Sakamoto Days", image: "assets/images/compressed/sakamoto_days.webp", video: "", secondary: "TMS Entertainment" },
    ]
  },

  {
    id: "best-character-design",
    tag: "Craft",
    name: "Best Character Design",
    description: "The most iconic, distinctive, or beautifully crafted character aesthetics.",
    nominees: [
      { name: "Gachiakuta", image: "assets/images/compressed/gachiakuta.webp", video: "", secondary: "Bones Film" },
      { name: "Hellsing Ultimate", image: "assets/images/compressed/hellsing.webp", video: "", secondary: "Madhouse, Satelight, Graphinica" },
      { name: "JoJo's Bizarre Adventure", image: "assets/images/compressed/golden_wind.webp", video: "", secondary: "David Production" },
      { name: "Land of the Lustrous", image: "assets/images/compressed/land_of_the_lustrous.webp", video: "", secondary: "Orange" },
      { name: "The Case Study of Vanitas", image: "assets/images/compressed/vanitas.webp", video: "", secondary: "Bones" },
    ]
  },

  {
    id: "best-director",
    tag: "Craft",
    name: "Best Director",
    description: "Recognising exceptional vision and direction that elevates the entire work.",
    nominees: [
      { name: "Hayao Miyazaki", image: "assets/images/compressed/hayao_miyazaki.webp", video: "", secondary: "Spirited Away / Princess Mononoke / Howl's Moving Castle / The Boy and the Heron" },
      { name: "Keiichirō Saitō", image: "assets/images/compressed/keiichiro.webp", video: "", secondary: "Frieren: Beyond Journey's End / Bocchi the Rock / Sonny Boy" },
      { name: "Naoko Yamada", image: "assets/images/compressed/naoko_yamada.webp", video: "", secondary: "K-On! / A Silent Voice / Liz and the Blue Bird / Tamako Market" },
      { name: "Satoshi Kon", image: "assets/images/compressed/satoshi_kon.webp", video: "", secondary: "Perfect Blue / Paprika / Millenium Actress / Tokyo Godfathers" },
      { name: "Tetsuro Araki", image: "assets/images/compressed/tetsuro_araki.jpg", video: "", secondary: "Attack on Titan / Death Note / Highschool of the Dead / Guilty Crown" },
    ]
  },

  {
    id: "best-background-art",
    tag: "Craft",
    name: "Best Background Art",
    description: "Stunning environmental artwork that makes every frame feel like a painting.",
    nominees: [
      { name: "Monogatari Series", image: "assets/images/compressed/kizumono.webp", video: "", secondary: "Shaft" },
      { name: "Mushishi", image: "assets/images/compressed/mushishi.webp", video: "", secondary: "Artland" },
      { name: "Mushoku Tensei: Jobless Reincarnation", image: "assets/images/compressed/mushoku_tensei.webp", video: "", secondary: "Studio Bind" },
      { name: "Shōshimin: How to Become Ordinary", image: "assets/images/compressed/shoshimin.webp", video: "", secondary: "Lapin Track" },
      { name: "Violet Evergarden", image: "assets/images/compressed/violet_evergarden.webp", video: "", secondary: "Kyoto Animation" },
    ]
  },

  // ── GENRE ────────────────────────────────────────────────
  {
    id: "best-romance",
    tag: "Genre",
    name: "Best Romance",
    description: "The most heartfelt, swoony, or emotionally resonant love story in anime.",
    nominees: [
      { name: "Kaguya-sama: Love Is War", image: "assets/images/compressed/kaguya_sama.webp", secondary: "A-1 Pictures" },
      { name: "Horimiya", image: "assets/images/compressed/horimiya.webp", secondary: "CloverWorks" },
      { name: "Ouran High School Host Club", image: "assets/images/compressed/ouran_highschool.webp", secondary: "Bones" },
      { name: "WorldEnd", image: "assets/images/compressed/worldend.webp", secondary: "Satelight, C2C" },
      { name: "Revolutionary Girl Utena", image: "assets/images/compressed/utena.webp", secondary: "J.C.Staff" },
    ]
  },

  {
    id: "best-comedy",
    tag: "Genre",
    name: "Best Comedy",
    description: "The anime that had you laughing hardest — sharp writing, perfect timing.",
    nominees: [
      { name: "Gintama", image: "assets/images/compressed/gintama.webp", secondary: "Sunrise" },
      { name: "Grand Blue Dreaming", image: "assets/images/compressed/grand_blue.webp", secondary: "Zero-G" },
      { name: "KonoSuba: God's Blessing on This Wonderful World!", image: "assets/images/compressed/konosuba.webp", secondary: "Studio Deen / Drive" },
      { name: "The Eminence in Shadow", image: "assets/images/compressed/eminence.webp", secondary: "Nexus" },
      { name: "Student Council Staff Members", image: "assets/images/compressed/seitokai.webp", secondary: "GoHands" },
    ]
  },

  {
    id: "best-action",
    tag: "Genre",
    name: "Best Action",
    description: "The most explosive, well-choreographed, and hype-inducing action anime.",
    nominees: [
      { name: "Attack on Titan", image: "assets/images/compressed/aot.webp", secondary: "Wit Studio / MAPPA" },
      { name: "Bleach: Thousand-Year Blood War", image: "assets/images/compressed/bleach_tybw.webp", secondary: "Studio Pierrot" },
      { name: "Chainsaw Man", image: "assets/images/compressed/csm_tv.webp", secondary: "MAPPA" },
      { name: "Dandadan", image: "assets/images/compressed/dandadan.webp", secondary: "Science SARU" },
      { name: "Solo Leveling", image: "assets/images/compressed/solo_leveling.webp", secondary: "A-1 Pictures" },
    ]
  },

  {
    id: "best-isekai",
    tag: "Genre",
    name: "Best Isekai",
    description: "The best anime featuring a character thrown into another world entirely.",
    nominees: [
      { name: "No Game No Life", image: "assets/images/compressed/NGNL.webp", secondary: "Madhouse" },
      { name: "Overlord", image: "assets/images/compressed/overlord.webp", secondary: "Madhouse" },
      { name: "Re:ZERO -Starting Life in Another World-", image: "assets/images/compressed/rezero.webp", secondary: "White Fox" },
      { name: "The Eminence in Shadow", image: "assets/images/compressed/eminence.webp", secondary: "Nexus" },
      { name: "Mushoku Tensei: Jobless Reincarnation", image: "assets/images/compressed/mushoku_tensei.webp", video: "", secondary: "Studio Bind" },
    ]
  },

  {
    id: "best-drama",
    tag: "Genre",
    name: "Best Drama",
    description: "The most emotionally gripping and dramatically compelling anime.",
    nominees: [
      { name: "From the New World", image: "assets/images/compressed/shinsekai_yori.webp", video: "", secondary: "A-1 Pictures" },
      { name: "Scum's Wish", image: "assets/images/compressed/kuzu_no_honkai.webp", video: "", secondary: "Lerche" },
      { name: "Sound! Euphonium", image: "assets/images/compressed/euphonium.webp", video: "", secondary: "Kyoto Animation" },
      { name: "Vinland Saga", image: "assets/images/compressed/vinland_saga.webp", video: "", secondary: "Wit Studio / MAPPA" },
      { name: "Your Lie in April", image: "assets/images/compressed/your_lie_in_april.webp", video: "", secondary: "A-1 Pictures" },
    ]
  },

  {
    id: "best-slice-of-life",
    tag: "Genre",
    name: "Best Slice of Life",
    description: "Celebrating the warmth, simplicity, and quiet beauty of everyday anime.",
    nominees: [
      { name: "Deaimon: Recipe for Happiness", image: "assets/images/compressed/deaimon.webp", video: "", secondary: "Encourage Films" },
      { name: "Hyouka", image: "assets/images/compressed/hyouka.webp", video: "", secondary: "Kyoto Animation" },
      { name: "JoJo's Bizarre Adventure: Diamond Is Unbreakable", image: "assets/images/compressed/DIU.webp", video: "", secondary: "David Production" },
      { name: "Miss Kobayashi's Dragon Maid", image: "assets/images/compressed/kobayashi.webp", video: "", secondary: "Kyoto Animation" },
      { name: "Secrets of the Silent Witch", image: "assets/images/compressed/secrets_of_the_silent_witch.webp", video: "", secondary: "Studio Gokumi" },
    ]
  },

  {
    id: "best-chinese-anime",
    tag: "Genre",
    name: "Best Chinese Anime",
    description: "The best donghua — celebrating the rise of Chinese animation on the world stage.",
    nominees: [
      { name: "Feng Ling Yu Xiu", image: "assets/images/compressed/fenglingyuxiu.webp", video: "", secondary: "Sunflowers" },
      { name: "Link Click", image: "assets/images/compressed/link_click.webp", video: "", secondary: "LAN Studio" },
      { name: "Lord of the Mysteries", image: "assets/images/compressed/LOTM.webp", video: "", secondary: "B.CMAY PICTURES" },
      { name: "The Legend of Luo Xiaohei", image: "assets/images/compressed/luo_xiaohei.webp", video: "", secondary: "HMCH" },
      { name: "To Be Hero X", image: "assets/images/compressed/tobeherox.webp", video: "", secondary: "Pb Animation, LAN Studio, Paper Plane Animation Studio, B.COOL STUDIO" },
    ]
  },

  {
    id: "best-mystery",
    tag: "Genre",
    name: "Best Mystery",
    description: "The anime that kept you guessing — twists, tension, and satisfying reveals.",
    nominees: [
      { name: "Attack on Titan", image: "assets/images/compressed/aot.webp", secondary: "Wit Studio / MAPPA" },
      { name: "Baccano!", image: "assets/images/compressed/baccano.webp", video: "", secondary: "Brain's Base" },
      { name: "Shōshimin: How to Become Ordinary", image: "assets/images/compressed/shoshimin.webp", video: "", secondary: "Lapin Track" },
      { name: "Summer Time Rendering", image: "assets/images/compressed/summertime_rendering.webp", video: "", secondary: "OLM" },
      { name: "The Apothecary Diaries", image: "assets/images/compressed/apothecary_1.webp", video: "", secondary: "OLM, TOHO Animation" },
    ]
  },

  {
    id: "best-sci-fi",
    tag: "Genre",
    name: "Best Sci-Fi",
    description: "The best anime exploring science, technology, space, and the future of humanity.",
    nominees: [
      { name: "Cowboy Bebop", image: "assets/images/compressed/cowboy_bebop.webp", secondary: "Sunrise" },
      { name: "Legend of the Galactic Heroes", image: "assets/images/compressed/legend_galactic.webp", secondary: "Kitty Film Mitaka Studio" },
      { name: "Psycho-Pass", image: "assets/images/compressed/psycho_pass.webp", secondary: "Production I.G" },
      { name: "Steins;Gate", image: "assets/images/compressed/steins_gate.webp", secondary: "White Fox" },
      { name: "Vivy: Fluorite Eye's Song", image: "assets/images/compressed/vivy.webp", video: "", secondary: "Wit Studio" },
    ]
  },

  {
    id: "best-horror",
    tag: "Genre",
    name: "Best Horror",
    description: "The anime that genuinely unsettled, disturbed, or scared you.",
    nominees: [
      { name: "Kaya-chan Isn't Scary", image: "assets/images/compressed/kaya_chan.webp", secondary: "East Fish Studio" },
      { name: "Mononoke", image: "assets/images/compressed/mononoke.webp", secondary: "Toei Animation" },
      { name: "Puella Magi Madoka Magica", image: "assets/images/compressed/madoka_magica.webp", secondary: "Shaft" },
      { name: "Shiki", image: "assets/images/compressed/shiki.webp", secondary: "Daume" },
      { name: "The Summer Hikaru Died", image: "assets/images/compressed/the_summer_hikaru_died.webp", video: "", secondary: "CygamesPictures" },
    ]
  },

  {
    id: "best-thriller",
    tag: "Genre",
    name: "Best Thriller",
    description: "Edge-of-your-seat tension — the anime that made your heart race every episode.",
    nominees: [
      { name: "Classroom of the Elite", image: "assets/images/compressed/COTE.webp", video: "", secondary: "Lerche" },
      { name: "Kaiji: Ultimate Survivor", image: "assets/images/compressed/kaiji.webp", video: "", secondary: "Madhouse" },
      { name: "Lycoris Recoil", image: "assets/images/compressed/lycoris_recoil.webp", video: "", secondary: "A-1 Pictures" },
      { name: "Monster", image: "assets/images/compressed/monster.webp", video: "", secondary: "Madhouse" },
      { name: "Steins;Gate", image: "assets/images/compressed/steins_gate.webp", secondary: "White Fox" },
    ]
  },

  {
    id: "best-sports",
    tag: "Genre",
    name: "Best Sports",
    description: "The best anime that captured the spirit of competition, teamwork, and triumph.",
    nominees: [
      { name: "Blue Lock", image: "assets/images/compressed/blue_lock.webp", video: "", secondary: "8bit" },
      { name: "Girls und Panzer", image: "assets/images/compressed/girls_und_panzer.webp", video: "", secondary: "Actas" },
      { name: "Haikyu!!", image: "assets/images/compressed/haikyuu.webp", video: "", secondary: "Production I.G" },
      { name: "Ping Pong the Animation", image: "assets/images/compressed/ping_pong.webp", video: "", secondary: "Tatsunoko Production" },
      { name: "Uma Musume: Cinderella Gray", image: "assets/images/compressed/uma.webp", video: "", secondary: "CygamesPictures" },
    ]
  },

  {
    id: "best-mecha",
    tag: "Genre",
    name: "Best Mecha",
    description: "Giant robots, epic battles, and the best of the mecha genre.",
    nominees: [
      { name: "86 -Eighty Six-", image: "assets/images/compressed/86.webp", secondary: "A-1 Pictures" },
      { name: "Code Geass", image: "assets/images/compressed/code_geass.webp", secondary: "Sunrise" },
      { name: "Darling in the Franxx", image: "assets/images/compressed/darling.webp", secondary: "Trigger / A-1 Pictures" },
      { name: "Mobile Suit Gundam 0080: War in the Pocket", image: "assets/images/compressed/gundam_0080.webp", secondary: "Sunrise" },
      { name: "Neon Genesis Evangelion", image: "assets/images/compressed/eva.webp", video: "", secondary: "Gainax, Tatsunoko Production" },
    ]
  },

  {
    id: "best-music-idol",
    tag: "Genre",
    name: "Best Music / Idol",
    description: "The best anime centred around music, bands, idols, or the performing arts.",
    nominees: [
      { name: "Bocchi the Rock!", image: "assets/images/compressed/bocchi.webp", secondary: "CloverWorks" },
      { name: "BanG Dream! It's MyGO!!!!!", image: "assets/images/compressed/mygo.webp", secondary: "SANZIGEN" },
      { name: "THE IDOLM@STER", image: "assets/images/compressed/idolmaster.webp", secondary: "A-1 Pictures" },
      { name: "Vivy: Fluorite Eye's Song", image: "assets/images/compressed/vivy.webp", video: "", secondary: "Wit Studio" },
      { name: "Zombieland Saga", image: "assets/images/compressed/zombieland_saga.webp", secondary: "MAPPA" },
    ]
  },

  // ── CHARACTER ────────────────────────────────────────────
  {
    id: "best-main-character",
    tag: "Character",
    name: "Best Main Character",
    description: "The most compelling, well-written protagonist you rooted for from start to finish.",
    nominees: [
      { name: "Eren Yeager", image: "assets/images/compressed/eren.webp", video: "", secondary: "Attack on Titan" },
      { name: "Monkey D. Luffy", image: "assets/images/compressed/luffy.webp", video: "", secondary: "One Piece" },
      { name: "Okabe Rintarou", image: "assets/images/compressed/rintarou.webp", video: "", secondary: "Steins;Gate" },
      { name: "Rentarou Aijō", image: "assets/images/compressed/rentarou.webp", video: "", secondary: "The 100 Girlfriends Who Really, Really, Really, Really, Really Love You" },
      { name: "Thorfinn Karlsefni", image: "assets/images/compressed/thorfinn.webp", video: "", secondary: "Vinland Saga" },
    ]
  },

  {
    id: "best-supporting-character",
    tag: "Character",
    name: "Best Supporting Character",
    description: "The side character who stole every scene they were in.",
    nominees: [
      { name: "Arataka Reigen", image: "assets/images/compressed/reigen.webp", video: "", secondary: "Mob Psycho 100" },
      { name: "Bruno Bucciarati", image: "assets/images/compressed/bruno.webp", video: "", secondary: "JoJo's Bizarre Adventure: Golden Wind" },
      { name: "Loulan", image: "assets/images/compressed/loulan.webp", video: "", secondary: "The Apothecary Diaries" },
      { name: "Marcille Donato", image: "assets/images/compressed/marcille.webp", video: "", secondary: "Delicious in Dungeon" },
      { name: "Roronoa Zoro", image: "assets/images/compressed/zoro.webp", video: "", secondary: "One Piece" },
    ]
  },

  {
    id: "must-protect",
    tag: "Character",
    name: '"Must Protect At All Costs" Character',
    description: "The character who made you feel an overwhelming, irrational need to protect them.",
    nominees: [
      { name: "Chiikawa", image: "assets/images/compressed/chiikawa.webp", video: "", secondary: "Chiikawa" },
      { name: "Emiya Shirou", image: "assets/images/compressed/emiya_shirou.webp", video: "", secondary: "Fate/stay night" },
      { name: "Levi Ackerman", image: "assets/images/compressed/levi.webp", video: "", secondary: "Attack on Titan" },
      { name: "Tony Tony Chopper", image: "assets/images/compressed/tony_chopper.webp", video: "", secondary: "One Piece" },
      { name: "Ushio Okazaki", image: "assets/images/compressed/ushio.webp", video: "", secondary: "Clannad: After Story" },
    ]
  },

  // ── MUSIC & AUDIO ────────────────────────────────────────
  {
    id: "best-score",
    tag: "Music & Audio",
    name: "Best Score",
    description: "The original soundtrack that elevated every scene and lived rent-free in your head.",
    nominees: [
      { name: "Attack on Titan", image: "assets/images/compressed/aot_s3_ost.webp", 
        video: "assets/clips/AoT_OST_ShingekiNoKyojin.mp4", startTime: 84,
        secondary: "Hiroyuki Sawano / Kohta Yamamoto" },
      { name: "Chainsaw Man – The Movie: Reze Arc", image: "assets/images/compressed/csm_reze_ost.webp", 
        video: "assets/clips/CSM_OST_InThePool.mp4", startTime: 123,
        secondary: "Kensuke Ushio" },
      { name: "Made in Abyss", image: "assets/images/compressed/MiA.webp", 
        video: "assets/clips/MiA_OST_OldStories.mp4", startTime: 198,
        secondary: "Kevin Penkin" },
      { name: "Natsume's Book of Friends", image: "assets/images/compressed/natsume_ost.webp", 
        video: "assets/clips/Natsume_OST_KimigaYobuNamae.mp4", 
        secondary: "Makoto Yoshimori" },
      { name: "Uma Musume: Cinderella Gray", image: "assets/images/compressed/uma_ost.webp", 
        video: "assets/clips/Uma_OST_BrightestHeart", startTime: 7,
        secondary: "Kenji Kawai" },
    ]
  },

  {
    id: "best-opening",
    tag: "Music & Audio",
    name: "Best Opening Sequence",
    description: "The opening you never once pressed skip on.",
    nominees: [
      { name: "Crying for Rain - 美波 (Minami)", image: "assets/images/compressed/dome_kano.webp", 
        video: "assets/clips/DomesticGirlfriend_OP.mp4", startTime:59,
        secondary: "Domestic Girlfriend" },
      { name: "Idol - YOASOBI", image: "assets/images/compressed/idol.webp", 
        video: "assets/clips/OshiNoKo_OP.mp4", secondary: "Oshi no Ko" },
      { name: "Kaiju - Sakanaction", image: "assets/images/compressed/orb.webp", 
        video: "assets/clips/Orb_OP.mp4", 
        secondary: "Orb: On the Movements of the Earth" },
      { name: "Tank! - Seatbelts", image: "assets/images/compressed/cowboy_bebop.webp", 
        video: "assets/clips/CowboyBebop_OP.mp4", 
        secondary: "Cowboy Bebop" },
      { name: "Where Our Blue Is - Tatsuya Kitani", image: "assets/images/compressed/jjk_op3.webp", 
        video: "assets/clips/JJK_OP3.mp4", startTime: 47,
        secondary: "Jujutsu Kaisen Season 2" },
    ]
  },

  {
    id: "best-ending",
    tag: "Music & Audio",
    name: "Best Ending Sequence",
    description: "The ending sequence that gave you the perfect send off after every episode.",
    nominees: [
      { name: "Anytime Anywhere - milet", image: "assets/images/compressed/frieren.webp", 
        video: "assets/clips/Frieren_ED1.mp4", secondary: "Frieren: Beyond Journey's End" },
      { name: "Departures - EGOIST", image: "assets/images/compressed/departures.webp", 
        video: "assets/clips/GuiltyCrown_Departures.mp4", secondary: "Guilty Crown" },
      { name: "Hare no Hi ni - Reira Ushio", image: "assets/images/compressed/fragrant_ending.webp", 
        video: "assets/clips/FragrantFlower_ED.mp4", secondary: "The Fragrant Flower Blooms with Dignity" },
      { name: "The 1 - Muque", image: "assets/images/compressed/the_1.webp", 
        video: "assets/clips/OnePiece_ED21.mp4", secondary: "One Piece" },
      { name: "Ray of Light - Shoko Nakagawa", image: "assets/images/compressed/fmab_ed5.webp", 
        video: "assets/clips/FMAB_ED5.mp4", secondary: "Fullmetal Alchemist: Brotherhood" },
    ]
  },

  {
    id: "best-va-jp",
    tag: "Music & Audio",
    name: "Best Voice Artist Performance (Japanese)",
    description: "An outstanding performance in the Japanese dub that brought a character to life.",
    nominees: [
      { name: "Daisuke Ono", image: "assets/images/compressed/daisuke_ono.webp", video: "", secondary: "Kujo Jotaro / Sebastian / Erwin Smith / Jyushimatsu / Itsuki Koizumi" },
      { name: "Reina Ueda", image: "assets/images/compressed/reina.webp", video: "", secondary: "Reze / Kanao / Ganyu / Chinatsu" },
      { name: "Rie Takahashi", image: "assets/images/compressed/rie_takahashi.webp", video: "", secondary: "Megumin / Emilia / Hu Tao / Takagi / Ai" },
      { name: "Takehito Koyasu", image: "assets/images/compressed/koyasu.webp", video: "", secondary: "Dio Brando / Toji / Zeke Yeager / Roswaal / Papa Shirogane" },
      { name: "Yūki Kaji", image: "assets/images/compressed/kaji_yuki.webp", video: "", secondary: "Eren Yeager / Meliodas / Koichi / Shu / Issei" },
    ]
  },

  {
    id: "best-va-en",
    tag: "Music & Audio",
    name: "Best Voice Artist Performance (English)",
    description: "An outstanding performance in the English dub that made the character entirely their own.",
    nominees: [
      { name: "Amber Lee Connors", image: "assets/images/compressed/amber_lee.webp", video: "", secondary: "Furina / Mei Mei / Pieck Finger / Komi Shoko" },
      { name: "Christopher Sabat", image: "assets/images/compressed/sabat.webp", video: "", secondary: "Roronoa Zoro / Vegeta / All Might / Alex Louis Armstrong" },
      { name: "Felecia Angelle", image: "assets/images/compressed/felicia.webp", video: "", secondary: "Mona Megistus / Shinoa Hiragi / Emi Yusa / Nakano Miku / Shalltear Bloodfallen" },
      { name: "Ian Sinclair", image: "assets/images/compressed/ian_sinclair.webp", video: "", secondary: "Narrator (Kaguya Sama Love is War) / Brook / Space Dandy / Tsukasa Shishio / Whis" },
      { name: "Monica Rial", image: "assets/images/compressed/monica.webp", video: "", secondary: "Mirajane Strauss / Tsubaki Nakatsukasa / Index / Yona / Tanya von Degurechaff" },
    ]
  },

];