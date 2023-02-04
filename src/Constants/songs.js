const songs = [
  {
    title: "Kimi no Shiranai Monogatari",
    artist: "supercell // monstrata",
    difficulty: "Celestial",
    star_rating: 5.14,
    background: require("../Assets/Backgrounds/kimi-no-shiranai-monogatari.jpg"),
    audio: new Audio(
      require("../Assets/Audio/kimi-no-shiranai-monogatari.mp3")
    ),
    start_time: 239.5,
  },
  {
    title: "GET BACK",
    artist: "THE ORAL CIGARETTES // Nikakis",
    difficulty: "Rolniczy's Insane",
    star_rating: 5.2,
    background: require("../Assets/Backgrounds/get-back.jpg"),
    audio: new Audio(require("../Assets/Audio/get-back.mp3")),
    start_time: 45,
  },
  {
    title: "Asu no Yozora Shoukaihan",
    artist: "Yuaru // Akitoshi",
    difficulty: "Linada's Insane",
    star_rating: 5.2,
    background: require("../Assets/Backgrounds/asu-no-yozora-shokaihan.png"),
    audio: new Audio(require("../Assets/Audio/asu-no-yozora-shokaihan.mp3")),
    start_time: 34.25,
  },
  {
    title: "Endless Tears",
    artist: "CLIFF EDGE feat. Nakamura Maiko // Rakunen",
    difficulty: "AlRakuen's Extra",
    star_rating: 5.21,
    background: require("../Assets/Backgrounds/endless-tears.jpg"),
    audio: new Audio(require("../Assets/Audio/endless-tears.mp3")),
    start_time: 157,
  },
  {
    title: "Flower Dance",
    artist: "DJ OKAWARI // Narcissu",
    difficulty: "Camellia",
    star_rating: 5.22,
    background: require("../Assets/Backgrounds/flower-dance.jpg"),
    audio: new Audio(require("../Assets/Audio/flower-dance.mp3")),
    start_time: 45,
  },
  {
    title: "Blue Zenith",
    artist: "xi // Asphysxia",
    difficulty: "RLC's Insane",
    star_rating: 5.22,
    background: require("../Assets/Backgrounds/blue-zenith.jpg"),
    audio: new Audio(require("../Assets/Audio/blue-zenith.mp3")),
    start_time: 74,
  },
  {
    title: "Zankyo Sanka (TV Size)",
    artist: "Aimer // Sotarks",
    difficulty: "Expert",
    star_rating: 5.27,
    background: require("../Assets/Backgrounds/zankyo-sanka.jpg"),
    audio: new Audio(require("../Assets/Audio/zankyo-sanka.mp3")),
    start_time: 48,
  },
  {
    title: "Utsuroi (Short Ver.)",
    artist: "TrySail // Log Off Now",
    difficulty: "mnyui's Extra",
    star_rating: 5.39,
    background: require("../Assets/Backgrounds/utsuroi-short.jpg"),
    audio: new Audio(require("../Assets/Audio/utsuroi-short.mp3")),
    start_time: 36.5,
  },
  {
    title: "Koko de Ikiteiru",
    artist: "mary x jon-YAKITORY // Amateurre",
    difficulty: "Mayu's Expert",
    star_rating: 5.42,
    background: require("../Assets/Backgrounds/koko-de-ikiteiru.jpg"),
    audio: new Audio(require("../Assets/Audio/koko-de-ikiteiru.mp3")),
    start_time: 152.5,
  },
  {
    title: "Ano Yume o Nazotte",
    artist: "YOASOBI // Sarawatlism",
    difficulty: "Daisuki",
    star_rating: 5.53,
    background: require("../Assets/Backgrounds/ano-yume-o-nazotte.jpg"),
    audio: new Audio(require("../Assets/Audio/ano-yume-o-nazotte.mp3")),
    start_time: 157.5,
  },
  {
    title: "Kaikai Kitan",
    artist: "Eve // AirinCat",
    difficulty: "FuJu's Expert",
    star_rating: 5.55,
    background: require("../Assets/Backgrounds/kaikai-kitan.png"),
    audio: new Audio(require("../Assets/Audio/kaikai-kitan.mp3")),
    start_time: 48,
  },
  {
    title: "LEVEL <yanaginagi ver.>",
    artist: "yanaginagi x THE SIXTH LIE // Erisu",
    difficulty: "Gaia's Extra",
    star_rating: 5.57,
    background: require("../Assets/Backgrounds/level-yanaginagi-ver.jpg"),
    audio: new Audio(require("../Assets/Audio/level-yanaginagi-ver.mp3")),
    start_time: 164.2,
  },
  {
    title: "Tada Koe Hitotsu",
    artist: "Rokudenashi // keevy",
    difficulty: "Expert",
    star_rating: 5.59,
    background: require("../Assets/Backgrounds/tada-koe-hitotsu.png"),
    audio: new Audio(require("../Assets/Audio/tada-koe-hitotsu.mp3")),
    start_time: 100,
  },
  {
    title: "Kani*Do-Luck! (TV Size)",
    artist: "Aiurabu // Azunyan-",
    difficulty: "Extra!",
    star_rating: 5.66,
    background: require("../Assets/Backgrounds/kani-do-luck.jpg"),
    audio: new Audio(require("../Assets/Audio/kani-do-luck.mp3")),
    start_time: 33.5,
  },
  {
    title: "Monochrome Butterfly",
    artist: "Aitsu Nakuru // Sotarks",
    difficulty: "Lami's Extra",
    star_rating: 5.88,
    background: require("../Assets/Backgrounds/monochrome-butterfly.jpg"),
    audio: new Audio(require("../Assets/Audio/monochrome-butterfly.mp3")),
    start_time: 52,
  },
  {
    title: "Literature",
    artist: "Ueda Reina // Kibbleru",
    difficulty: "Promenade",
    star_rating: 5.96,
    background: require("../Assets/Backgrounds/literature.jpg"),
    audio: new Audio(require("../Assets/Audio/literature.mp3")),
    start_time: 42,
  },
  {
    title: "Koshaberi Biyori",
    artist: "Fantastic Youth // Smoking_windex",
    difficulty: "Hard",
    star_rating: 3.02,
    background: require("../Assets/Backgrounds/koshaberi-biyori.png"),
    audio: new Audio(require("../Assets/Audio/koshaberi-biyori.mp3")),
    start_time: 58,
  },
  {
    title: "Zurui yo...",
    artist: "CHIHIRO // Vigalia",
    difficulty: "Insane",
    star_rating: 6.21,
    background: require("../Assets/Backgrounds/zurui-yo.jpg"),
    audio: new Audio(require("../Assets/Audio/zurui-yo.mp3")),
    start_time: 144,
  },
  {
    title: "Uchiage Hanabi",
    artist: "DAOKO x Yonezu Kenshi // Monstrata",
    difficulty: "Pyrotechnic",
    star_rating: 4.71,
    background: require("../Assets/Backgrounds/uchiage-hanabi.png"),
    audio: new Audio(require("../Assets/Audio/uchiage-hanabi.mp3")),
    start_time: 60,
  },
  {
    title: "Kokoronashi",
    artist: "Hanatan // Lavender",
    difficulty: "Heartbreak",
    star_rating: 4.98,
    background: require("../Assets/Backgrounds/kokoronashi.jpg"),
    audio: new Audio(require("../Assets/Audio/kokoronashi.mp3")),
    start_time: 47,
  },
  {
    title: "Kuchizuke Diamond",
    artist: "WEAVER // jieusieu",
    difficulty: "Lemur",
    star_rating: 5.71,
    background: require("../Assets/Backgrounds/kuchizuke-diamond.png"),
    audio: new Audio(require("../Assets/Audio/kuchizuke-diamond.mp3")),
    start_time: 63.5,
  },
  {
    title: "Harumachi Clover",
    artist: "Hanasaka Yui(CV: M.A.O) // Deppyforce",
    difficulty: "Happy Ending",
    star_rating: 5.11,
    background: require("../Assets/Backgrounds/harumachi-clover.png"),
    audio: new Audio(require("../Assets/Audio/harumachi-clover.mp3")),
    start_time: 55,
  },
  {
    title: "My Dearest",
    artist: "supercell // Yukiyo",
    difficulty: "Last Love",
    star_rating: 5.49,
    background: require("../Assets/Backgrounds/my-dearest.jpg"),
    audio: new Audio(require("../Assets/Audio/my-dearest.mp3")),
    start_time: 81,
  },
  {
    title: "Mou ii kai?",
    artist: "THE ORAL CIGARETTES // Nevo",
    difficulty: "NiVo's Extra",
    star_rating: 6.04,
    background: require("../Assets/Backgrounds/mou-ii-kai.jpg"),
    audio: new Audio(require("../Assets/Audio/mou-ii-kai.mp3")),
    start_time: 35.5,
  },
  {
    title: "Gareki no Shuuon",
    artist: "shoujo byou // Lyruke",
    difficulty: "Solitude",
    star_rating: 6.75,
    background: require("../Assets/Backgrounds/gareki-no-shuuon.png"),
    audio: new Audio(require("../Assets/Audio/gareki-no-shuuon.mp3")),
    start_time: 107,
  },
  {
    title: "Gunjou Infinity",
    artist: "Toyama Nao // [Karcher]",
    difficulty: "Blue Sky",
    star_rating: 6.75,
    background: require("../Assets/Backgrounds/gunjou-infinity.jpg"),
    audio: new Audio(require("../Assets/Audio/gunjou-infinity.mp3")),
    start_time: 223.5,
  },
  {
    title: "Namikare",
    artist: "TUYU // SnowNiNo_",
    difficulty: "Withering Tears",
    star_rating: 6.99,
    background: require("../Assets/Backgrounds/namikare.jpg"),
    audio: new Audio(require("../Assets/Audio/namikare.mp3")),
    start_time: 13.5,
  },
  {
    title: "Heart no Atoaji",
    artist: "yuikonnu // Fycho",
    difficulty: "Heart",
    star_rating: 6.69,
    background: require("../Assets/Backgrounds/heart-no-atoji.jpg"),
    audio: new Audio(require("../Assets/Audio/heart-no-atoji.mp3")),
    start_time: 46,
  },
  {
    title: "km/h",
    artist: "Ray // Keqing",
    difficulty: "re/union",
    star_rating: 6.41,
    background: require("../Assets/Backgrounds/km_h.jpg"),
    audio: new Audio(require("../Assets/Audio/km_h.mp3")),
    start_time: 22,
  },
  {
    title: "Kan Saete Kuyashiiwa",
    artist: "ZUTOMAO // Nathan",
    difficulty: "geragera",
    star_rating: 5.93,
    background: require("../Assets/Backgrounds/kan-saete-kuyashiiwa.png"),
    audio: new Audio(require("../Assets/Audio/kan-saete-kuyashiiwa.mp3")),
    start_time: 57.5,
  },
  {
    title: "Yoru ni Kakeru",
    artist: "YOASOBI // 9ami",
    difficulty: "The both of us, racing into the night",
    star_rating: 7.3,
    background: require("../Assets/Backgrounds/yoru-ni-kakeru.jpg"),
    audio: new Audio(require("../Assets/Audio/yoru-ni-kakeru.mp3")),
    start_time: 75,
  },
];

export const SONGS = songs.sort((songA, songB) => {
  return songA.star_rating < songB.star_rating
    ? -1
    : songA.title < songB.title
    ? 0
    : 1;
});
