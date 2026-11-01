import { restoreLettersInIpa, type RestoreIpaRule } from "helpers/restoreLettersInIpa";

// Restore double consonant letters (Кеннеди, Kennedy)
export const doubleConsonantRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: "b", lettersToRestore: { bb: "bb" } },
  { ipaCharToBeReplaced: "d", lettersToRestore: { dd: "dd" } },
  { ipaCharToBeReplaced: "f", lettersToRestore: { ff: "ff" } },
  { ipaCharToBeReplaced: "ɡ", lettersToRestore: { gg: "ɡɡ" } },
  { ipaCharToBeReplaced: "k", lettersToRestore: { kk: "kk" } },
  { ipaCharToBeReplaced: "ɫ", lettersToRestore: { ll: "ɫɫ" } },
  { ipaCharToBeReplaced: "m", lettersToRestore: { mm: "mm" } },
  { ipaCharToBeReplaced: "n", lettersToRestore: { nn: "nn" } },
  { ipaCharToBeReplaced: "p", lettersToRestore: { pp: "pp" } },
  { ipaCharToBeReplaced: "ɹ", lettersToRestore: { rr: "ɹɹ" } },
  { ipaCharToBeReplaced: "s", lettersToRestore: { ss: "ss" } },
  { ipaCharToBeReplaced: "t", lettersToRestore: { tt: "tt" } },
  { ipaCharToBeReplaced: "v", lettersToRestore: { vv: "vv" } },
  { ipaCharToBeReplaced: "w", lettersToRestore: { ww: "ww" } },
  { ipaCharToBeReplaced: "z", lettersToRestore: { zz: "zz" } },
];

// Restore "tch" as a double "t" (Митчелл, ミッチェル)
export const tchRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: "tʃ", lettersToRestore: { tch: "ttʃ" } },
];

// A vowel letter before a final "-le" or "-lle" keeps its vowel, as the vowel restores give it
// (Carole, Gisele, Annabelle, Agile, Opole), so only a consonant + "-le" is syllabic
const vowelLeLetters = { ale: "aɫ", ele: "eɫ", elle: "eɫ", ile: "iɫ", ole: "ɔɫ", ule: "uɫ" };

// Extra restore for targets that write a final "-le" (not "-ile") with a bare l (Japanese グーグル, リトル)
export const syllabicLeRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: "əɫ$", lettersToRestore: { ...vowelLeLetters, le: "ɫ" } },
];

// Extra restore for non-rhotic targets: a final "-are" read as "ɛɹ", which the "a" restore would take (Clare クレア, 클레어)
export const areRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: "ɛɹ$", lettersToRestore: { are: "ɛɹ" } },
];

// Extra restore for Japanese, which writes a final "-y", "-ey" or "-ie" as a long "ー" (Harry ハリー, Shirley シャーリー,
// Charlie チャーリー), keeps the "ɛɹ" of a final "-are" (Clare クレア, Ware ウェア) and a final unstressed "-ir" as "ール"
// (Vladimir ヴラディミール, Kashmir カシミール), but skips the "ir" restore elsewhere and writes that vowel as "ー" (Bird バード).
// It also marks an "i" spelled with "e" as "ɨ", which enIpaJaRules makes long when stressed (Peter ピーター, Keith キース,
// Irene アイリーン, not Lisa リサ or Reply リプライ), writes a long "ー" for an "ɔ" spelled "au" or "aw" (Paul ポール, Shaw ショー)
// and a final "u" spelled "ew", "ue", "ou" or "ugh" (Matthew マシュー, Andrew アンドリュー, Hugh ヒュー), a double "k" for "ck"
// and "cc" (Mickey ミッキー, Rebecca レベッカ) a double "t" for a final "tte" (Charlotte シャーロット) and a bare "v" for a final "-ven", "-phen" or "-vens" (Steven スティーヴン,
// Stephen スティーヴン, Stevenson スティーヴンソン), with "aven" taken before the magic "e" restore (Haven ヘイヴン), and keeps
// the schwa of a final unstressed "-us" or "-um" (Venus ヴィーナス, Marcus マーカス, Barnum バーナム), but not of "-ius" or
// "-ium" (Julius ジュリウス, Byzantium ビザンティウム), and an "s" for a final "-as", "-is", "-os" or "-ys" that phonemize
// voices (Carlos カルロス, Lucas ルーカス, Dias ダイアス), but not for "-ays", "-eys" or "-oys" (Hays ヘイズ)
export const jaRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: "i$", lettersToRestore: { y: "iː", ey: "iː", ie: "iː" } },
  { ipaCharToBeReplaced: "i", lettersToRestore: { ea: "ɨ", ei: "ɨ", e: "ɨ" } },
  { ipaCharToBeReplaced: "ɔ", lettersToRestore: { au: "ɔː", aw: "ɔː" } },
  { ipaCharToBeReplaced: "ɹu$", lettersToRestore: { rew: "ɹjuː" } },
  {
    ipaCharToBeReplaced: ["ju$", "u$"],
    lettersToRestore: { ew: "juː", ue: "uː", ou: "uː", ugh: "juː" },
  },
  { ipaCharToBeReplaced: "k", lettersToRestore: { ck: "kk", cc: "kk" }, window: 2 },
  { ipaCharToBeReplaced: "t$", lettersToRestore: { tte: "tt" } },
  {
    ipaCharToBeReplaced: ["vən$", "vɪn$"],
    lettersToRestore: { aven: "vn", ven: "vn", phen: "vn" },
  },
  { ipaCharToBeReplaced: ["iəs$", "jəs$", "ɪəs$"], lettersToRestore: { ius: "ius" } },
  { ipaCharToBeReplaced: ["iəm$", "jəm$", "ɪəm$"], lettersToRestore: { ium: "ium" } },
  { ipaCharToBeReplaced: ["əs$", "əz$"], lettersToRestore: { us: "əs" } },
  { ipaCharToBeReplaced: "əm$", lettersToRestore: { um: "əm" } },
  { ipaCharToBeReplaced: "vən", lettersToRestore: { vens: "vn", phens: "vn" } },
  ...areRestoreRules,
  { ipaCharToBeReplaced: ["ɝ$", "ɚ$"], lettersToRestore: { ir: "iːɹ" } },
  { ipaCharToBeReplaced: "əz$", lettersToRestore: { as: "as", is: "is", os: "ɔs", ys: "is" } },
  {
    ipaCharToBeReplaced: "z$",
    lettersToRestore: { ays: "z", eys: "z", oys: "z", as: "s", is: "s", os: "s", ys: "s" },
  },
];

// Extra restore for targets that also write "Michael" with a bare l (Гугл, Майкл, Gugl, Majkl, 구글, 마이클, غوغل, مايكل)
export const syllabicLRestoreRules: RestoreIpaRule[] = [
  ...syllabicLeRestoreRules,
  { ipaCharToBeReplaced: "kəɫ", lettersToRestore: { ichael: "kɫ" } },
];

// Extra restore for targets that keep the schwa of a final "-le" (Bengali গুগল, Hindi गूगल, Thai กูเกิล)
export const syllabicLeSchwaRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: "əɫ$", lettersToRestore: { ...vowelLeLetters, le: "əɫ" } },
];

// Extra restore for targets that also keep the schwa of "Michael" (Hindi माइकल, Thai ไมเคิล, not माइकेल, ไมเกล)
export const syllabicLSchwaRestoreRules: RestoreIpaRule[] = [
  ...syllabicLeSchwaRestoreRules,
  { ipaCharToBeReplaced: "kəɫ", lettersToRestore: { ichael: "kəɫ" } },
];

// Restore "ell", whose "ll" restore would otherwise take the "ɫ" first (Hellerstein). A diphthong
// keeps its "ɪ" and gets what the "e" and "ll" restores give it (Averell, Tellez); the narrow window
// keeps the "ɪɫ" of Dilella off its "ell"
export const ellRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: "eɪɫ", lettersToRestore: { ell: "ɛɫɫ" }, keepStress: true, window: 2 },
  { ipaCharToBeReplaced: "aɪɫ", lettersToRestore: { ell: "aɪɫɫ" }, keepStress: true, window: 2 },
  { ipaCharToBeReplaced: "ɔɪɫ", lettersToRestore: { ell: "ɔɪɫɫ" }, keepStress: true, window: 2 },
  { ipaCharToBeReplaced: "ɪɫ", lettersToRestore: { ell: "ɛɫɫ" }, keepStress: true, window: 1 },
];

// Restore "ett", whose "tt" restore would otherwise take the "t" first (Garrett). A diphthong keeps
// its "ɪ" and gets what the "e" and "tt" restores give it (Hiett, Spoletto). Targets whose standards
// follow the /ɪt/ pronunciation skip these (Chinese 巴特利特, Korean 바틀릿 for Bartlett)
export const ettRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: "eɪt", lettersToRestore: { ett: "ɛtt" }, keepStress: true, window: 2 },
  { ipaCharToBeReplaced: "aɪt", lettersToRestore: { ett: "aɪtt" }, keepStress: true, window: 2 },
  { ipaCharToBeReplaced: "ɔɪt", lettersToRestore: { ett: "ɔɪtt" }, keepStress: true, window: 2 },
  { ipaCharToBeReplaced: "ɪt", lettersToRestore: { ett: "ett" }, keepStress: true, window: 1 },
];

// Restore "orr" from an r-coloured vowel followed by "ɹ" (Worrall Уоррал, not Верралл)
export const orrRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: ["ɝɹ", "ɚɹ"], lettersToRestore: { orr: "ɔɹɹ" } },
];

// Restore "s" from a voiced "z", skipped by Japanese, which follows the sound (Jones ジョーンズ, Leeds リーズ)
export const sRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: "z", lettersToRestore: { s: "s" } },
];

// Restore "ir" from an r-coloured vowel, skipped by Japanese (see jaRestoreRules)
export const irRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: ["ɝ", "ɚ"], lettersToRestore: { ir: "ɪɹ" } },
];

// Restore "ar" and "or" from an r-coloured vowel, skipped by Korean (see koRVowelRestoreRules), which writes it as a bare "어"
// (Richard 리처드, Taylor 테일러, Pearl 펄)
export const arOrRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: ["ɝ", "ɚ"], lettersToRestore: { ar: "ɑɹ" } },
  { ipaCharToBeReplaced: ["ɝ", "ɚ"], lettersToRestore: { or: "oɹ" } },
];

// Every restore that writes a spelled double consonant, skipped by targets that write it once (Kennedy كينيدي, केनेडी, Mitchell ميتشيل)
export const geminateRestoreRules: RestoreIpaRule[] = [
  ...doubleConsonantRestoreRules,
  ...tchRestoreRules,
  ...ellRestoreRules,
  ...ettRestoreRules,
  ...orrRestoreRules,
];

// The "ell", "ett" and "orr" restores with a single consonant, for targets that skip the double consonants
// (Farrell فاريل, Hiett هايت, Bennett بينيت, Worrall وورال)
export const geminateSingleRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: "eɪɫ", lettersToRestore: { ell: "ɛɫ" }, keepStress: true, window: 2 },
  { ipaCharToBeReplaced: "aɪɫ", lettersToRestore: { ell: "aɪɫ" }, keepStress: true, window: 2 },
  { ipaCharToBeReplaced: "ɔɪɫ", lettersToRestore: { ell: "ɔɪɫ" }, keepStress: true, window: 2 },
  { ipaCharToBeReplaced: "ɪɫ", lettersToRestore: { ell: "ɛɫ" }, keepStress: true, window: 1 },
  { ipaCharToBeReplaced: "eɪt", lettersToRestore: { ett: "ɛt" }, keepStress: true, window: 2 },
  { ipaCharToBeReplaced: "aɪt", lettersToRestore: { ett: "aɪt" }, keepStress: true, window: 2 },
  { ipaCharToBeReplaced: "ɔɪt", lettersToRestore: { ett: "ɔɪt" }, keepStress: true, window: 2 },
  { ipaCharToBeReplaced: "ɪt", lettersToRestore: { ett: "et" }, keepStress: true, window: 1 },
  { ipaCharToBeReplaced: ["ɝɹ", "ɚɹ"], lettersToRestore: { orr: "ɔɹ" } },
];

// Extra restore for Korean, which skips the "ar", "or" and "ir" restores but keeps them before a vowel letter,
// where the "r" starts the next syllable (Gregory 그레고리, Honoria 호노리아, Atbara 애트바라), and keeps the "르"
// of a final "-ir" (Vladimir 블라디미르, Kashmir 카슈미르). The three-letter keys run before every two-letter one,
// so they also give back the vowel they take (Hatboro 해트보로, not 해트브로)
const rVowels = { ar: "ɑɹ", or: "oɹ", ir: "ɪɹ" };
export const koRVowelRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: ["ɝ$", "ɚ$"], lettersToRestore: { ir: "iɹɨ" } },
  {
    ipaCharToBeReplaced: ["ɝə", "ɚə"],
    lettersToRestore: Object.fromEntries(
      Object.entries(rVowels).flatMap(([letters, ipa]) =>
        Object.entries({ a: "a", i: "i", o: "ɔ", u: "u" }).map(([vowel, vowelIpa]) => [
          letters + vowel,
          ipa + vowelIpa,
        ]),
      ),
    ),
  },
  {
    ipaCharToBeReplaced: ["ɝoʊ", "ɚoʊ", "ɝo", "ɚo"],
    lettersToRestore: Object.fromEntries(
      Object.entries(rVowels).map(([letters, ipa]) => [letters + "o", ipa + "o"]),
    ),
  },
  {
    ipaCharToBeReplaced: ["ɝi", "ɚi", "ɝɪ", "ɚɪ"],
    lettersToRestore: Object.fromEntries(
      Object.entries(rVowels).flatMap(([letters, ipa]) =>
        ["i", "y"].map(vowel => [letters + vowel, ipa + "i"]),
      ),
    ),
  },
];

// Korean keeps the "tt" restore, which holds the /ɪt/ of "-ett" against the "e" restore (Beckett 베키트, not 베케트),
// and the "ell" restore, whose "ɫɫ" en-ipa_ko writes once (Farrell 파렐, Averell 아베렐)
export const koGeminateRestoreRules: RestoreIpaRule[] = geminateRestoreRules.filter(
  rule => !("tt" in rule.lettersToRestore) && !ellRestoreRules.includes(rule),
);

// Extra restore for Bulgarian, which writes a final unstressed "-on" as "-ън" (Джонсън, Клинтън, Симънс, Линкълн),
// except after "j" (Mccallion stays Мъкальон, not Мъкалян), a final "-ia" as "-ия" (Вирджиния, Джулия),
// and a spelled "z" or "c" as "ц" (Кац, Фриц, Сирацки), which marks it off from a spelled "ts" (Уотсън, Робъртс)
export const bgRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: "jən$", lettersToRestore: { ion: "jɔn" } },
  { ipaCharToBeReplaced: "jə$", lettersToRestore: { ia: "ia" } },
  { ipaCharToBeReplaced: "ts", lettersToRestore: { tz: "ʦ", zz: "ʦ", c: "ʦ", z: "ʦ" } },
  { ipaCharToBeReplaced: "ən$", lettersToRestore: { oln: "əɫn", on: "ən" } },
  { ipaCharToBeReplaced: ["ənz$", "əns$"], lettersToRestore: { ons: "əns" } },
  { ipaCharToBeReplaced: ["əndz$", "ənds$"], lettersToRestore: { onds: "ənds" } },
  { ipaCharToBeReplaced: "əm$", lettersToRestore: { om: "əm" } },
];

// Restore "o" from a strut vowel (London Лондон), skipped by Korean, which writes it "어" (런던, 더글러스)
export const oStrutRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: "ʌ", lettersToRestore: { o: "ɔ" } },
];

// Restore "ia" read as "aɪæ", skipped by Korean, which follows the sound (Diana 다이애나)
export const iaRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: "aɪæ", lettersToRestore: { ia: "ɪa" } },
];

// Give the "e" of "uel" back to its schwa, which the "u" restore would double (Samuel, Emanuel)
export const uelRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: ["uəɫ", "uɫ"], lettersToRestore: { uel: "ueɫ" } },
];

// Restore "ng" from "ŋ", skipped by Korean, which writes "ŋ" as a final "ㅇ" (Washington 워싱턴, Kingston 킹스턴, England 잉글랜드)
export const ngRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: ["ŋɡ", "ŋg"], lettersToRestore: { ng: "nɡ" } },
  { ipaCharToBeReplaced: "ŋ", lettersToRestore: { ng: "nɡ" } },
];

// Extra restore for Korean, which follows the sound of an unstressed final syllable (Gordon 고던, Norman 노먼,
// Thomas 토머스, Edmund 에드먼드, Arnold 아널드, Lawrence 로런스, Daniel 대니얼, Samuel 새뮤얼, Lincoln 링컨),
// writes "-son" (also inside a word), a final "-sen", "-xon", "-den", "-ten", "-ven" and "-phen" with "으" (Johnson 존슨,
// Jacksonville 잭슨빌, Hansen 핸슨, Nixon 닉슨, Hayden 헤이든, Britten 브리튼, Stephen 스티븐; not Rosenhaus 로센하우스),
// marks the "kw" and "ɡw" of "qu", "gu" and an initial "kw" or "gw" as one sound, which the "u" restore would split
// and en-ipa_ko keeps in one syllable (Quentin 퀜틴, Squire 스콰이어, Gwen 궨, not Stockwell 스톡웰), restores the "j"
// of "tew", "dew" and "stu" that phonemize drops (Stewart 스튜어트, Stuart 스튜어트), marks a "ts" spelled "z", "zz" or
// "tz" as one sound, which en-ipa_ko does not split (Mezzaluna 메찰루나, not Watson 왓슨), and restores the "ɡ" of an
// "ng" before a vowel letter that phonemize drops (Langen 랭건, Singapore 싱거포어, not Singer 싱어)
export const koVowelRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: ["sən", "zən"], lettersToRestore: { son: "sɨn" } },
  { ipaCharToBeReplaced: ["sən$", "zən$"], lettersToRestore: { sen: "sɨn" } },
  { ipaCharToBeReplaced: "ksən$", lettersToRestore: { xon: "ksɨn" } },
  { ipaCharToBeReplaced: "dən$", lettersToRestore: { den: "dɨn" } },
  { ipaCharToBeReplaced: "tən$", lettersToRestore: { tten: "tɨn", ten: "tɨn" } },
  { ipaCharToBeReplaced: "vən$", lettersToRestore: { ven: "vɨn", phen: "vɨn" } },
  { ipaCharToBeReplaced: "ən$", lettersToRestore: { oln: "ən", an: "ən", en: "ən", on: "ən" } },
  { ipaCharToBeReplaced: ["əs$", "əz$"], lettersToRestore: { as: "əs", us: "əs" } },
  { ipaCharToBeReplaced: "əm$", lettersToRestore: { am: "əm", om: "əm", um: "əm" } },
  { ipaCharToBeReplaced: "ənd$", lettersToRestore: { ond: "ənd", und: "ənd" } },
  { ipaCharToBeReplaced: "əɫd$", lettersToRestore: { ald: "əɫd", old: "əɫd" } },
  { ipaCharToBeReplaced: "əns$", lettersToRestore: { ance: "əns", ence: "əns" } },
  { ipaCharToBeReplaced: "ənt$", lettersToRestore: { ant: "ənt" } },
  { ipaCharToBeReplaced: "jəɫ", lettersToRestore: { iel: "jəɫ" } },
  { ipaCharToBeReplaced: ["uəɫ", "uɫ"], lettersToRestore: { uel: "uəɫ" } },
  { ipaCharToBeReplaced: "kw", lettersToRestore: { qu: "kʷ" } },
  { ipaCharToBeReplaced: "ɡw", lettersToRestore: { gu: "ɡʷ" } },
  { ipaCharToBeReplaced: "^kw", lettersToRestore: { kw: "kʷ" } },
  { ipaCharToBeReplaced: "^ɡw", lettersToRestore: { gw: "ɡʷ" } },
  { ipaCharToBeReplaced: "tu", lettersToRestore: { tew: "tju" } },
  { ipaCharToBeReplaced: "stu", lettersToRestore: { stu: "stju" } },
  { ipaCharToBeReplaced: "ts", lettersToRestore: { tz: "ʦ", zz: "ʦ", z: "ʦ" } },
  { ipaCharToBeReplaced: "du", lettersToRestore: { dew: "dju" } },
  ...["ə", "ɪ", "i", "ɛ", "æ", "ɑ", "o", "u", "ʌ", "ɔ"].map(vowelIpa => ({
    ipaCharToBeReplaced: "ŋ" + vowelIpa,
    lettersToRestore: Object.fromEntries(
      ["a", "e", "i", "o", "u", "y"].map(vowel => ["ng" + vowel, "ŋɡ" + vowelIpa]),
    ),
  })),
];

// The restores Korean skips for koVowelRestoreRules
export const koSkippedVowelRestoreRules: RestoreIpaRule[] = [
  ...oStrutRestoreRules,
  ...iaRestoreRules,
  ...uelRestoreRules,
  ...ngRestoreRules,
];

export const normalizeEnIpa = (
  originalWord: string,
  ipaWord: string,
  extraRules: RestoreIpaRule[] = [],
  skippedRules: RestoreIpaRule[] = [],
): string => {
  const rules: RestoreIpaRule[] = [
    // Restore all double letters
    { ipaCharToBeReplaced: "ɑ", lettersToRestore: { aa: "aː" } },
    { ipaCharToBeReplaced: "i", lettersToRestore: { ee: "iː" } },
    { ipaCharToBeReplaced: "ʊ", lettersToRestore: { oo: "ʊː" } },
    { ipaCharToBeReplaced: "u", lettersToRestore: { oo: "uː" } },
    { ipaCharToBeReplaced: ["juə", "ju"], lettersToRestore: { uu: "uː" } },
    ...doubleConsonantRestoreRules,
    ...orrRestoreRules,
    // Mark the "oʊ" of "ow" (Shadow, Window) so that enIpaRules keeps it unreduced
    { ipaCharToBeReplaced: "oʊ", lettersToRestore: { ow: "oɷ" } },
    // Restore "oa" (Noah, Joanna), a final "oan" (Joan) and an "oana" read as "oʊnə" (Moana), but not the "oʊ"
    // of "oa" before a consonant (Oakley, Coates)
    { ipaCharToBeReplaced: ["oʊə", "oʊæ", "oʊɑ"], lettersToRestore: { oa: "oa" } },
    { ipaCharToBeReplaced: "oʊn$", lettersToRestore: { oan: "oan" } },
    { ipaCharToBeReplaced: "oʊnə", lettersToRestore: { oana: "oana" } },
    // Preserve "eɪʃən" for "ation"
    { ipaCharToBeReplaced: "eɪʃən", lettersToRestore: { ation: "eɪʃən" } },
    // Preserve "ʃən" for "tion"
    { ipaCharToBeReplaced: "ʃən", lettersToRestore: { tion: "ʃən" } },
    // Read the "ae" of "chael" as the "e" of "el" (Michael and Rachael like Rachel), not as the "a" the "a" restore would give
    { ipaCharToBeReplaced: "kəɫ", lettersToRestore: { chael: "keɫ" } },
    { ipaCharToBeReplaced: "tʃəɫ", lettersToRestore: { chael: "tʃeɫ" } },
    // Give the "e" of "uel" and "iel" back to its schwa, which the "u" and "i" restores would double
    // (Samuel, Emanuel, Gabriel); phonemize drops the schwa of Samuel and Lemuel altogether
    ...uelRestoreRules,
    { ipaCharToBeReplaced: "iəɫ", lettersToRestore: { iel: "ieɫ" } },
    // Restore "o"
    { ipaCharToBeReplaced: ["ɑ", "ə"], lettersToRestore: { o: "ɔ" } },
    ...oStrutRestoreRules,
    // Restore "a"
    { ipaCharToBeReplaced: ["ɛ", "ə"], lettersToRestore: { a: "a" } },
    // Drop the extra final "i" of a word-final "ei" read as "eɪi" (Bartolomei)
    { ipaCharToBeReplaced: ["eɪi$", "eɪɪ$"], lettersToRestore: { ei: "ɛɪ" } },
    // Preserve "ei" and "ey"
    { ipaCharToBeReplaced: ["eɪ", "ɛɪ"], lettersToRestore: { ei: "ɛɪ", ey: "ɛɪ" } },
    // Restore "ei"
    { ipaCharToBeReplaced: ["e", "ɛ"], lettersToRestore: { ei: "ɛɪ", ey: "ɛɪ" } },
    // Keep the "eɪ" of a magic "e" (Gate, Grace), which the "e" restore would take
    {
      ipaCharToBeReplaced: ["eɪ", "ɛɪ"],
      lettersToRestore: {
        abe: "eɪ",
        ace: "eɪ",
        ade: "eɪ",
        afe: "eɪ",
        age: "eɪ",
        ake: "eɪ",
        ale: "eɪ",
        ame: "eɪ",
        ane: "eɪ",
        ape: "eɪ",
        ase: "eɪ",
        ate: "eɪ",
        ave: "eɪ",
        aze: "eɪ",
      },
    },
    // Restore "e"
    { ipaCharToBeReplaced: ["eɪ", "ɛɪ"], lettersToRestore: { e: "ɛ" } },
    ...ellRestoreRules,
    ...ettRestoreRules,
    // Restore "el"
    { ipaCharToBeReplaced: "ɪɫ", lettersToRestore: { el: "eɫ" }, window: 1 },
    // Restore "et"
    { ipaCharToBeReplaced: "ɪt", lettersToRestore: { et: "et" } },
    // Restore "ie"
    { ipaCharToBeReplaced: "jə", lettersToRestore: { ie: "ɪɛ" } },
    // Restore "ia", but keep the diphthong of "iane" (Diane, Dianne)
    {
      ipaCharToBeReplaced: "aɪæ",
      lettersToRestore: { ianne: "aɪæ", iane: "aɪæ" },
      keepStress: true,
    },
    ...iaRestoreRules,
    // Restore "ea"
    { ipaCharToBeReplaced: "iə", lettersToRestore: { ea: "ea" } },
    { ipaCharToBeReplaced: "ə", lettersToRestore: { ea: "ea" } },
    { ipaCharToBeReplaced: "ɛ", lettersToRestore: { ea: "ɛ" } },
    // Restore "ai"
    { ipaCharToBeReplaced: "ɛ", lettersToRestore: { ai: "ai" } },
    // Restore "u"
    { ipaCharToBeReplaced: ["w", "ə"], lettersToRestore: { u: "u" } },
    // Restore "i"
    { ipaCharToBeReplaced: "ə", lettersToRestore: { i: "i" } },
    // Restore "e"
    { ipaCharToBeReplaced: "ə", lettersToRestore: { e: "e" } },
    // Restore "ja"
    { ipaCharToBeReplaced: "dʒə", lettersToRestore: { ja: "dʒa" } },
    { ipaCharToBeReplaced: "jə", lettersToRestore: { ja: "ja" } },
    { ipaCharToBeReplaced: "dʒ", lettersToRestore: { ja: "dʒ" } },
    { ipaCharToBeReplaced: "ʒ", lettersToRestore: { ja: "ʒ" } },
    { ipaCharToBeReplaced: "j", lettersToRestore: { ja: "j" } },
    { ipaCharToBeReplaced: "ə", lettersToRestore: { ja: "ja" } },
    ...sRestoreRules,
    // Restore "x"
    { ipaCharToBeReplaced: "ɡz", lettersToRestore: { x: "ks" } },
    // phonemize puts a schwa between the "r" and "l" of "Charles" (Чарльз, not Чарелс)
    { ipaCharToBeReplaced: ["ɹəɫz", "ɹəɫs"], lettersToRestore: { rles: "ɹɫs" } },
    // Restore "ar" and "or"
    ...arOrRestoreRules,
    // Restore "ir"
    ...irRestoreRules,
    // phonemize writes the "aɪɹ" of a "y" or "i" before "r" as "aɝ" (Byron, Cyrus, Myra, Biros); a double "rr" keeps it short (Pyrrhus)
    { ipaCharToBeReplaced: ["aɝ", "aɚ"], lettersToRestore: { yrr: "ɪɹ", yr: "aɪɹ", ir: "aɪɹ" } },
    // Restore "ro"
    { ipaCharToBeReplaced: ["ɝ", "ɚ"], lettersToRestore: { ro: "ɹo" } },
    // Restore "nju"
    { ipaCharToBeReplaced: "nu", lettersToRestore: { new: "nju" } },
    // Restore "mery"
    { ipaCharToBeReplaced: "mɹi", lettersToRestore: { mery: "meɹi" } },
    // Remove "ɹ" after "ɝ"/"ɚ" to avoid doubling of "r"
    { ipaCharToBeReplaced: "ɝɹ", lettersToRestore: { er: "ɝ" } },
    { ipaCharToBeReplaced: "ɚɹ", lettersToRestore: { er: "ɚ" } },
    // Restore "ng"
    { ipaCharToBeReplaced: "ŋh", lettersToRestore: { ngh: "nɡ" } },
    ...ngRestoreRules,
    // Remove "h" after "g"
    { ipaCharToBeReplaced: ["ɡh", "gh"], lettersToRestore: { gh: "ɡ" } },
    // Restore "h"
    { ipaCharToBeReplaced: "^", lettersToRestore: { h: "h" } },
    // Restore "lk"
    { ipaCharToBeReplaced: ["ɫk", "lk"], lettersToRestore: { lk: "ɫk" } },
    { ipaCharToBeReplaced: "k", lettersToRestore: { lk: "ɫk" } },
    ...tchRestoreRules,
    // Restore "soft"
    { ipaCharToBeReplaced: "sɔft", lettersToRestore: { soft: "sɔft" } },
    { ipaCharToBeReplaced: "sɔf", lettersToRestore: { soft: "sɔft" } },
    // Restore "burgh"
    { ipaCharToBeReplaced: "bɝoʊ", lettersToRestore: { burgh: "bɝɣ" } },
    { ipaCharToBeReplaced: "bɚoʊ", lettersToRestore: { burgh: "bɚɣ" } },
    ...extraRules,
  ];
  return restoreLettersInIpa(
    originalWord,
    ipaWord,
    rules.filter(rule => !skippedRules.includes(rule)),
  );
};
