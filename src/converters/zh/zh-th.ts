import { Text } from "types";

export const zhTh = async (text: Text) => {
  const { pinyin } = await import("pinyin-pro");
  const { FINALS, HIGH_CLASS_PAIRS, INITIALS, MID_CLASS, SONORANTS, ZERO_INITIAL } =
    await import("data/zh/zh-th.map");
  const { wordSplitter } = await import("helpers/wordSplitter");

  // A pinyin syllable with its tone number in Thai script, by the Royal Institute table (mao2 เหมา, ze2 เจ๋อ, si4 ซื่อ)
  const syllableToThai = (syllable: string) => {
    const tone = Number(/\d$/.exec(syllable)?.[0] ?? 0);
    const toneless = syllable.replace(/\d$/, "");
    // The syllabic n, ng and m (嗯, 呣) have no initial
    const initial = Object.prototype.hasOwnProperty.call(ZERO_INITIAL, toneless)
      ? ""
      : (/^(?:[zcs]h|[bpmfdtnlgkhjqxrzcs])/.exec(toneless)?.[0] ?? "");
    let consonant: string;
    let final: string;
    if (initial) {
      consonant = INITIALS[initial];
      final = toneless.slice(initial.length);
      // ju, que, xuan, jun, lüe are jü, qüe, xüan, jün
      if (/^[jqx]$/.test(initial)) final = final.replace(/^u/, "ü");
      final = final.replace(/^ue$/, "üe");
      if (/^(?:[zcs]h?|r)$/.test(initial) && final === "i") final = "ɨ";
    } else {
      [consonant, final] = ZERO_INITIAL[toneless] ?? ["อ", toneless];
    }
    let template = FINALS[final];
    if (!template) return undefined;
    // ang is written short after b, p, d, t, g, k, w and alone (หวัง, ถัง, กัง), and a falling an, ang is short
    // except after ฟ and the sonorants (ฮั่น, ชั่ง, but ว่าน, ฟ่าน)
    if (
      (final === "ang" && /[กคตทปพวอ]/.test(consonant)) ||
      (tone === 4 && /^ang?$/.test(final) && !/[ฟงนมยรลว]/.test(consonant))
    ) {
      template = template.replace("CTา", "CัT");
    }
    // กว, ขว, ควา are Thai clusters, which need no phinthu
    if (/[กขค]/.test(consonant)) template = template.replace("ฺ", "");

    // Tone 2 is ๋ on a mid-class initial and no mark on a high-class one, tone 3 is ่ on either; a low-class initial
    // takes its high-class pair or a leading ห for them. Tone 4 is ้, but ่ on a low-class initial
    let lead = "";
    let mark = "";
    const mid = MID_CLASS.includes(consonant);
    if (tone === 2 || tone === 3) {
      if (HIGH_CLASS_PAIRS[consonant]) consonant = HIGH_CLASS_PAIRS[consonant];
      else if (SONORANTS.includes(consonant)) {
        // ü and its cluster: ลฺหวี่, ยฺหวี
        if (template.includes("ฺว")) template = template.replace("ฺว", "ฺหว");
        else lead = "ห";
      }
      mark = tone === 3 ? "่" : mid ? "๋" : "";
    } else if (tone === 4) {
      mark = mid ? "้" : "่";
    }
    return template.replace("C", lead + consonant).replace("T", mark);
  };

  // pinyin-pro gives one item per character; letters other than Han ones stay as they are (A股)
  const wordToThai = (word: string) => {
    const chars = [...word];
    return pinyin(word, { toneType: "num", type: "array" })
      .map((syllable, i) =>
        /\p{Script=Han}/u.test(chars[i] ?? "")
          ? (syllableToThai(syllable.replace(/v/g, "ü")) ?? chars[i])
          : syllable,
      )
      .join("");
  };

  const convert = async (text: string) => {
    const thai = await wordSplitter(text, "zh", wordToThai);
    return thai.replace(/[０-９]/g, digit => String(digit.charCodeAt(0) - 0xff10));
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};
