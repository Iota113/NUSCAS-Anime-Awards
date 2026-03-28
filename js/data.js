const CATEGORIES = [

  // ── GENERAL ─────────────────────────────────────────────
  {
    id: "anime-of-the-year",
    tag: "General",
    filter: "general",
    name: "Anime of the Year (2025)",
    nominees: [
      { name: "Apocalypse Hotel", image: "assets/images/apocalypse_hotel.webp", video: "", secondary: "C2C" },
      { name: "The Apothecary Diaries Season 2", image: "assets/images/apothecary_diaries.webp", video: "", secondary: "OLM, TOHO Animation" },
      { name: "Takopi's Original Sin", image: "assets/images/takopi.jpg", video: "", secondary: "ENISHIYA" },
      { name: "The Summer Hikaru Died", image: "assets/images/the_summer_hikaru_died.jpg", video: "", secondary: "CygamesPictures" },
      { name: "", image: "", video: "", secondary: "" },
    ]
  },

  {
    id: "best-anime",
    tag: "General",
    filter: "general",
    name: "Best Anime of All Time",
    nominees: [
      { name: "Clannad", image: "assets/images/clannad.avif", video: "", secondary: "Kyoto Animation" },
      { name: "Frieren: Beyond Journey's End", image: "assets/images/frieren.jpg", video: "", secondary: "Madhouse" },
      { name: "Neon Genesis Evangelion", image: "assets/images/eva.webp", video: "", secondary: "Gainax, Tatsunoko Production" },
      { name: "", image: "", video: "", secondary: "" },
      { name: "", image: "", video: "", secondary: "" },
    ]
  },

  {
    id: "film-of-the-year",
    tag: "General",
    filter: "general",
    name: "Film of the Year (2025 - 2026)",
    nominees: [
      { name: "100 Meters", image: "assets/images/100m.jpg", video: "", secondary: "Rock 'n' Roll Mountain" },
      { name: "Chainsaw Man – The Movie: Reze Arc", image: "assets/images/csm.jpg", video: "", secondary: "MAPPA" },
      { name: "Colorful Stage! The Movie: A Miku Who Can't Sing", image: "assets/images/miku.jpg", video: "", secondary: "P.A. Works" },
      { name: "Cosmic Princess Kaguya!", image: "assets/images/cosmic_princess.webp", video: "", secondary: "Studio Colorido, Studio Chromato" },
      { name: "Demon Slayer: Kimetsu no Yaiba – The Movie: Infinity Castle", image: "assets/images/infinity_castle.webp", video: "", secondary: "ufotable" },
    ]
  },

 {
    id: "best-film",
    tag: "General",
    filter: "general",
    name: "Best Film of All Time",
    nominees: [
      { name: "Liz and the Blue Bird", image: "assets/images/liz_and_blue_bird.webp", video: "", secondary: "Kyoto Animation" },
      { name: "Look Back", image: "assets/images/lookback.webp", video: "", secondary: "Studio Durian" },
      { name: "Paprika", image: "assets/images/paprika.webp", video: "", secondary: "Madhouse" },
      { name: "Spirited Away", image: "assets/images/spirited_away.jpg", video: "", secondary: "Studio Ghibli" },
      { name: "Your Name", image: "assets/images/your_name.jpg", video: "", secondary: "CoMix Wave Films" },
    ]
  },

  {
    id: "best-continuing-series",
    tag: "General",
    filter: "general",
    name: "Best Continuing Series (2026)",
    nominees: [
      { name: "Frieren: Beyond Journey's End Season 2", image: "assets/images/frieren_2.webp", secondary: "Madhouse" },
      { name: "JoJo's Bizarre Adventure: Steel Ball Run", image: "assets/images/sbr.webp", secondary: "David Production" },
      { name: "Medalist Season 2", image: "assets/images/medalist_2.webp", secondary: "ENGI" },
      { name: "One Piece", image: "assets/images/one_piece.jpg", secondary: "Toei Animation" },
      { name: "Oshi no Ko Season 3", image: "assets/images/oshi_no_ko.webp", secondary: "Doga Kobo" },
    ]
  },

  {
    id: "best-new-series",
    tag: "General",
    filter: "general",
    name: "Best New Series (2026)",
    nominees: [
      { name: "Fate/strange Fake", image: "assets/images/fsf.webp", secondary: "A-1 Pictures" },
      { name: "Journal with Witch", image: "assets/images/journal_with_witch.webp", secondary: "Shuka" },
      { name: "Kaya-chan Isn't Scary", image: "assets/images/kaya_chan.webp", secondary: "East Fish Studio" },
      { name: "Shiboyugi: Playing Death Games to Put Food on the Table", image: "assets/images/shiboyugi.jpg", secondary: "Studio Deen" },
      { name: "You and I Are Polar Opposites", image: "assets/images/polar_opp.webp", secondary: "Lapin Track" },
    ]
  },

  {
    id: "best-original-anime",
    tag: "General",
    filter: "general",
    name: "Best Original Anime",
    nominees: [
      { name: "Code Geass", image: "assets/images/code_geass.jpg", secondary: "Sunrise" },
      { name: "Kill la Kill", image: "assets/images/kill_la_kill.webp", video: "", secondary: "Trigger" },
      { name: "Vivy: Fluorite Eye's Song", image: "assets/images/vivy.webp", video: "", secondary: "Wit Studio" },
      { name: "", image: "", video: "", secondary: "" },
      { name: "", image: "", video: "", secondary: "" },
    ]
  },

  // ── CRAFT ────────────────────────────────────────────────
  {
    id: "best-animation",
    tag: "Craft",
    filter: "craft",
    name: "Best Animation",
    nominees: [
      { name: "Frieren: Beyond Journey's End", image: "assets/images/frieren.jpg", video: "", secondary: "Madhouse" },
      { name: "Violet Evergarden", image: "assets/images/violet_evergarden.jpg", video: "", secondary: "Kyoto Animation" },
      { name: "", image: "", video: "", secondary: "" },
      { name: "", image: "", video: "", secondary: "" },
      { name: "", image: "", video: "", secondary: "" },
    ]
  },

  {
    id: "best-character-design",
    tag: "Craft",
    filter: "craft",
    name: "Best Character Design",
    nominees: [
      { name: "JoJo's Bizarre Adventure", image: "assets/images/golden_wind.jpg", video: "", secondary: "" },
      { name: "", image: "", video: "", secondary: "" },
      { name: "", image: "", video: "", secondary: "" },
      { name: "", image: "", video: "", secondary: "" },
      { name: "", image: "", video: "", secondary: "" },
    ]
  },

    {
    id: "best-director",
    tag: "Craft",
    filter: "craft",
    name: "Best Director",
    description: "Recognising exceptional vision and direction in anime.",
    nominees: [
      { name: "Hayao Miyazaki", image: "assets/images/hayao_miyazaki.webp", video: "", secondary: "Spirited Away / Princess Mononoke / Howl's Moving Castle / The Boy and the Heron" },
      { name: "Tetsuro Araki", image: "assets/images/tetsuro_araki.jpg", video: "", secondary: "Attack on Titan / Death Note / Highschool of the Dead / Guilty Crown" },
      { name: "Director Name 3", image: "", video: "", secondary: "Series / Film" },
      { name: "Director Name 4", image: "", video: "", secondary: "Series / Film" },
      { name: "Director Name 5", image: "", video: "", secondary: "Series / Film" },
    ]
  },

  {
    id: "best-background-art",
    tag: "Craft",
    filter: "craft",
    name: "Best Background Art",
    nominees: [
      { name: "Monogatari Series", image: "assets/images/kizumono.jpg", video: "", secondary: "Shaft" },
      { name: "Mushishi", image: "assets/images/mushishi.jpg", video: "", secondary: "Artland" },
      { name: "Mushoku Tensei: Jobless Reincarnation", image: "assets/images/mushoku_tensei.webp", video: "", secondary: "Studio Bind" },
      { name: "Shōshimin: How to Become Ordinary", image: "assets/images/shoshimin.webp", video: "", secondary: "Lapin Track" },
   { name: "Violet Evergarden", image: "assets/images/violet_evergarden.jpg", video: "", secondary: "Kyoto Animation" },
    ]
  },

  // ── GENRE ────────────────────────────────────────────────
  {
    id: "best-romance",
    tag: "Genre",
    filter: "genre",
    name: "Best Romance",
    nominees: [
      { name: "Kaguya-sama: Love Is War", image: "assets/images/kaguya_sama.webp", secondary: "A-1 Pictures" },
      { name: "Horimiya", image: "assets/images/horimiya.webp", secondary: "CloverWorks" },
      { name: "", secondary: "" },
      { name: "", secondary: "" },
      { name: "", secondary: "" },
    ]
  },

  {
    id: "best-comedy",
    tag: "Genre",
    filter: "genre",
    name: "Best Comedy",
    nominees: [
      { name: "Grand Blue Dreaming", image: "assets/images/grand_blue.jpg", secondary: "Zero-G" },
      { name: "KonoSuba: God's Blessing on This Wonderful World!", image: "assets/images/konosuba.webp", secondary: "Studio Deen / Drive" },
      { name: "Rent-a-Girlfriend", image: "assets/images/rent_a_girlfriend.webp", secondary: "TMS Entertainment" },
      { name: "The Eminence in Shadow", image: "assets/images/eminence.jpg", secondary: "Nexus" },
      { name: "", secondary: "" },
    ]
  },

  {
    id: "best-action",
    tag: "Genre",
    filter: "genre",
    name: "Best Action",
    nominees: [
      { name: "Attack on Titan", image: "assets/images/aot.webp", secondary: "Wit Studio / MAPPA" },
      { name: "", secondary: "" },
      { name: "", secondary: "" },
      { name: "", secondary: "" },
      { name: "", secondary: "" },
    ]
  },

  {
    id: "best-isekai",
    tag: "Genre",
    filter: "genre",
    name: "Best Isekai",
    nominees: [
      { name: "No Game No Life", image: "assets/images/NGNL.jpg", secondary: "Madhouse" },
      { name: "Overlord", image: "assets/images/overlord.jpg", secondary: "Madhouse" },
      { name: "Re:ZERO -Starting Life in Another World-", image: "assets/images/rezero.jpg", secondary: "White Fox" },
      { name: "The Eminence in Shadow", image: "assets/images/eminence.jpg", secondary: "Nexus" },
      { name: "Mushoku Tensei: Jobless Reincarnation", image: "assets/images/mushoku_tensei.webp", video: "", secondary: "Studio Bind" },
    ]
  },

  {
    id: "best-drama",
    tag: "Genre",
    filter: "genre",
    name: "Best Drama",
    nominees: [
      { name: "Vinland Saga", image: "assets/images/vinland_saga.jpg", video: "", secondary: "Wit Studio / MAPPA" },
      { name: "", image: "", video: "", secondary: "" },
      { name: "", image: "", video: "", secondary: "" },
      { name: "", image: "", video: "", secondary: "" },
      { name: "", image: "", video: "", secondary: "" },
    ]
  },

  {
    id: "best-slice-of-life",
    tag: "Genre",
    filter: "genre",
    name: "Best Slice of Life",
    nominees: [
      { name: "JoJo's Bizarre Adventure: Diamond Is Unbreakable", image: "assets/images/DIU.jpg", video: "", secondary: "David Production" },
      { name: "", image: "", video: "", secondary: "" },
      { name: "", image: "", video: "", secondary: "" },
      { name: "", image: "", video: "", secondary: "" },
      { name: "", image: "", video: "", secondary: "" },
    ]
  },

  {
    id: "best-chinese-anime",
    tag: "Genre",
    filter: "genre",
    name: "Best Chinese Anime",
    nominees: [
      { name: "Feng Ling Yu Xiu", image: "assets/images/fenglingyuxiu.jpg", video: "", secondary: "Sunflowers" },
      { name: "The Legend of Luo Xiaohei", image: "assets/images/luo_xiaohei.jpg", video: "", secondary: "HMCH" },
      { name: "Lord of the Mysteries", image: "assets/images/LOTM.webp", video: "", secondary: "B.CMAY PICTURES" },
      { name: "To Be Hero X", image: "assets/images/tobeherox.webp", video: "", secondary: "Aniplex, bilibili, BeDream" },
      { name: "", image: "", video: "", secondary: "" },
    ]
  },

  {
    id: "best-mystery",
    tag: "Genre",
    filter: "genre",
    name: "Best Mystery",
    nominees: [
      { name: "Attack on Titan", image: "assets/images/aot.webp", secondary: "Wit Studio / MAPPA" },
      { name: "Baccano!", image: "assets/images/baccano.jpg", video: "", secondary: "Brain's Base" },
      { name: "Shōshimin: How to Become Ordinary", image: "assets/images/shoshimin.webp", video: "", secondary: "Lapin Track" },
      { name: "Summer Time Rendering", image: "assets/images/summertime_rendering.webp", video: "", secondary: "OLM" },
      { name: "The Apothecary Diaries", image: "assets/images/apothecary_1.webp", video: "", secondary: "OLM, TOHO Animation" },
    ]
  },

  {
    id: "best-sci-fi",
    tag: "Genre",
    filter: "genre",
    name: "Best Sci-Fi",
    nominees: [
      { name: "Cowboy Bebop", image: "assets/images/cowboy_bebop.jpg", secondary: "Sunrise" },
      { name: "Legend of the Galactic Heroes", image: "assets/images/legend_galactic.jpg", secondary: "Kitty Film Mitaka Studio" },
      { name: "Psycho-Pass", image: "assets/images/psycho_pass.jpeg", secondary: "Production I.G" },
      { name: "Steins;Gate", image: "assets/images/steins_gate.jpg", secondary: "White Fox" },
      { name: "Vivy: Fluorite Eye's Song", image: "assets/images/vivy.webp", video: "", secondary: "Wit Studio" },
    ]
  },

  {
    id: "best-horror",
    tag: "Genre",
    filter: "genre",
    name: "Best Horror",
    nominees: [
      { name: "Kaya-chan Isn't Scary", image: "assets/images/kaya_chan.webp", secondary: "East Fish Studio" },
      { name: "Mononoke", image: "assets/images/mononoke.jpg", secondary: "Toei Animation" },
      { name: "Puella Magi Madoka Magica", image: "assets/images/madoka_magica.webp", secondary: "Shaft" },
      { name: "Shiki", image: "assets/images/shiki.jpg", secondary: "Daume" },
      { name: "The Summer Hikaru Died", image: "assets/images/the_summer_hikaru_died.jpg", video: "", secondary: "CygamesPictures" },
    ]
  },

  {
    id: "best-thriller",
    tag: "Genre",
    filter: "genre",
    name: "Best Thriller",
    nominees: [
      { name: "Classroom of the Elite", image: "assets/images/COTE.webp", video: "", secondary: "Lerche" },
      { name: "Kaiji: Ultimate Survivor", image: "assets/images/kaiji.webp", video: "", secondary: "Madhouse" },
      { name: "Lycoris Recoil", image: "assets/images/lycoris_recoil.jpg", video: "", secondary: "A-1 Pictures" },
      { name: "Monster", image: "assets/images/monster.webp", video: "", secondary: "Madhouse" },
      { name: "Steins;Gate", image: "assets/images/steins_gate.jpg", secondary: "White Fox" },
    ]
  },

  {
    id: "best-sports",
    tag: "Genre",
    filter: "genre",
    name: "Best Sports",
    nominees: [
      { name: "Blue Lock", image: "assets/images/blue_lock.webp", video: "", secondary: "8bit" },
      { name: "Haikyu!!", image: "assets/images/haikyuu.webp", video: "", secondary: "Production I.G" },
      { name: "Ping Pong the Animation", image: "assets/images/ping_pong.jpg", video: "", secondary: "Tatsunoko Production" },
      { name: "Uma Musume: Cinderella Gray", image: "assets/images/uma.jpg", video: "", secondary: "CygamesPictures" },
      { name: "", image: "", video: "", secondary: "" },
    ]
  },

  {
    id: "best-mecha",
    tag: "Genre",
    filter: "genre",
    name: "Best Mecha",
    nominees: [
      { name: "86 -Eighty Six-", image: "assets/images/86.webp", secondary: "A-1 Pictures" },
      { name: "Code Geass", image: "assets/images/code_geass.jpg", secondary: "Sunrise" },
      { name: "Darling in the Franxx", image: "assets/images/darling.jpg", secondary: "Trigger / A-1 Pictures" },
      { name: "Mobile Suit Gundam 0080: War in the Pocket", image: "assets/images/gundam_0080.jpg", secondary: "Sunrise" },
      { name: "Neon Genesis Evangelion", image: "assets/images/eva.webp", video: "", secondary: "Gainax, Tatsunoko Production" },
    ]
  },


  {
    id: "best-music-idol",
    tag: "Genre",
    filter: "genre",
    name: "Best Music / Idol",
    nominees: [
      { name: "Bocchi the Rock!", image: "assets/images/bocchi.webp", secondary: "CloverWorks" },
      { name: "BanG Dream! It's MyGO!!!!!", image: "assets/images/mygo.jpg", secondary: "SANZIGEN" },
      { name: "THE IDOLM@STER", image: "assets/images/idolmaster.webp", secondary: "A-1 Pictures" },
      { name: "Vivy: Fluorite Eye's Song", image: "assets/images/vivy.webp", video: "", secondary: "Wit Studio" },
      { name: "Zombieland Saga", image: "assets/images/zombieland_saga.jpg", secondary: "MAPPA" },
    ]
  },
  // ── CHARACTER ────────────────────────────────────────────
  {
    id: "best-main-character",
    tag: "Character",
    filter: "character",
    name: "Best Main Character",
    nominees: [
      { name: "Rentarou Aijō", image: "assets/images/rentarou.jpeg", video: "", secondary: "The 100 Girlfriends Who Really, Really, Really, Really, Really Love You" },
      { name: "Thorfinn Karlsefni", image: "assets/images/thorfinn.jpg", video: "", secondary: "Vinland Saga" },
      { name: "", image: "", video: "", secondary: "" },
      { name: "", image: "", video: "", secondary: "" },
      { name: "", image: "", video: "", secondary: "" },
    ]
  },

  {
    id: "best-supporting-character",
    tag: "Character",
    filter: "character",
    name: "Best Supporting Character",
    nominees: [
      { name: "Marcille Donato", image: "assets/images/marcille.avif", video: "", secondary: "Delicious in Dungeon" },
      { name: "", image: "", video: "", secondary: "" },
      { name: "", image: "", video: "", secondary: "" },
      { name: "", image: "", video: "", secondary: "" },
      { name: "", image: "", video: "", secondary: "" },
    ]
  },

  {
    id: "must-protect",
    tag: "Character",
    filter: "character",
    name: '"Must Protect At All Costs" Character',
    nominees: [
      { name: "Chiikawa", image: "assets/images/chiikawa.jpg", video: "", secondary: "Chiikawa" },
      { name: "", image: "", video: "", secondary: "" },
      { name: "", image: "", video: "", secondary: "" },
      { name: "", image: "", video: "", secondary: "" },
      { name: "", image: "", video: "", secondary: "" },
    ]
  },

  // ── MUSIC & AUDIO ────────────────────────────────────────
  {
    id: "best-score",
    tag: "Music & Audio",
    filter: "music",
    name: "Best Score",
    nominees: [
      { name: "Attack on Titan", image: "assets/images/aot_s3_ost.webp", secondary: "Hiroyuki Sawano / Kohta Yamamoto" },
      { name: "Chainsaw Man – The Movie: Reze Arc", image: "assets/images/csm_reze_ost.jpg", video: "", secondary: "Kensuke Ushio" },
      { name: "Made in Abyss", image: "assets/images/MiA.jpg", video: "", secondary: "Kevin Penkin" },
      { name: "Natsume's Book of Friends", image: "assets/images/natsume_ost.jpg", video: "", secondary: "Makoto Yoshimori" },
      { name: "Uma Musume: Cinderella Gray", image: "assets/images/uma_ost.jpeg", video: "", secondary: "Kenji Kawai" },
    ]
  },

  {
    id: "best-opening",
    tag: "Music & Audio",
    filter: "music",
    name: "Best Opening Sequence",
    nominees: [
      { name: "Idol - YOASOBI", image: "assets/images/idol.webp", video: "", secondary: "Oshi no Ko" },
      { name: "Tank! - Seatbelts", image: "assets/images/cowboy_bebop.jpg", video: "", secondary: "Cowboy Bebop" },
      { name: "\"Crying for Rain\" - 美波 (Minami)", image: "assets/images/dome_kano.webp", video: "", secondary: "Domestic Girlfriend" },
      { name: "", image: "", video: "", secondary: "" },
      { name: "", image: "", video: "", secondary: "" },
    ]
  },

  {
    id: "best-ending",
    tag: "Music & Audio",
    filter: "music",
    name: "Best Ending Sequence",
    nominees: [
      { name: "Anytime Anywhere - milet", image: "assets/images/frieren.jpg", video: "", secondary: "Frieren: Beyond Journey's End" },
      { name: "", image: "", video: "", secondary: "" },
      { name: "", image: "", video: "", secondary: "" },
      { name: "", image: "", video: "", secondary: "" },
      { name: "", image: "", video: "", secondary: "" },
    ]
  },

  {
    id: "best-va-jp",
    tag: "Music & Audio",
    filter: "music",
    name: "Best Voice Artist Performance (Japanese)",
    nominees: [
      { name: "Daisuke Ono", image: "assets/images/daisuke_ono.jpg", video: "", secondary: "Kujo Jotaro / Sebastian / Erwin Smith / Jyushimatsu / Itsuki Koizumi"},
      { name: "Reina Ueda", image: "assets/images/reina.webp", video: "", secondary: "Reze / Kanao / Ganyu / Chinatsu" },
      { name: "Rie Takahashi", image: "assets/images/rie_takahashi.webp", video: "", secondary: "Megumin / Emilia / Hu Tao / Takagi / Ai" },
      { name: "Takehito Koyasu", image: "assets/images/koyasu.jpg", video: "", secondary: "Dio Brando / Toji / Zeke Yeager / Roswaal / Papa Shirogane" },
      { name: "Yūki Kaji", image: "assets/images/kaji_yuki.webp", video: "", secondary: "Eren Yeager / Meliodas / Koichi / Shu / Issei" },
    ]
  },

  {
    id: "best-va-en",
    tag: "Music & Audio",
    filter: "music",
    name: "Best Voice Artist Performance (English)",
    nominees: [
      { name: "Felecia Angelle", image: "assets/images/felicia.jpg", video: "", secondary: "Mona Megistus / Shinoa Hiragi / Emi Yusa / Nakano Miku / Shalltear Bloodfallen " },
      { name: "Ian Sinclair", image: "assets/images/ian_sinclair.webp", video: "", secondary: "Narrator (Kaguya Sama Love is War) / Brook / Space Dandy / Tsukasa Shishio / Whis" },
      { name: "Monica Rial", image: "assets/images/monica.webp", video: "", secondary: "Mirajane Strauss / Tsubaki Nakatsukasa / Index / Yona / Tanya von Degurechaff" },
      { name: "", image: "", video: "", secondary: "" },
      { name: "", image: "", video: "", secondary: "" },
    ]
  },

];