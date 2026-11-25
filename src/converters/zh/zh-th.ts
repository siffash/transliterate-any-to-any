import { Text } from "types";

export const zhTh = async (text: Text) => {
  const { mapText } = await import("helpers/convertText");
  const { zhPinyinArray } = await import("helpers/zhPinyin");
  const { FINALS, HIGH_CLASS_PAIRS, INITIALS, MID_CLASS, SONORANTS, ZERO_INITIAL } =
    await import("data/zh/zh-th.map");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { stripZhUnit } = await import("helpers/zhUnits");

  const syllableToThai = (syllable: string) => {
    const tone = Number(/\d$/.exec(syllable)?.[0] ?? 0);
    const toneless = syllable.replace(/\d$/, "");
    const initial = Object.prototype.hasOwnProperty.call(ZERO_INITIAL, toneless)
      ? ""
      : (/^(?:[zcs]h|[bpmfdtnlgkhjqxrzcs])/.exec(toneless)?.[0] ?? "");
    let consonant: string;
    let final: string;
    if (initial) {
      consonant = INITIALS[initial];
      final = toneless.slice(initial.length);
      if (/^[jqx]$/.test(initial)) final = final.replace(/^u/, "ü");
      final = final.replace(/^ue$/, "üe");
      if (/^(?:[zcs]h?|r)$/.test(initial) && final === "i") final = "ɨ";
    } else {
      [consonant, final] = ZERO_INITIAL[toneless] ?? ["อ", toneless];
    }
    let template = FINALS[final];
    if (!template) return undefined;
    if (
      (final === "ang" && /[กคตทปพวอ]/.test(consonant)) ||
      (tone === 4 && /^ang?$/.test(final) && !/[ฟงนมยรลว]/.test(consonant))
    ) {
      template = template.replace("CTา", "CัT");
    }
    if (/[กขค]/.test(consonant)) template = template.replace("ฺ", "");

    let lead = "";
    let mark = "";
    const mid = MID_CLASS.includes(consonant);
    if (tone === 2 || tone === 3) {
      if (HIGH_CLASS_PAIRS[consonant]) consonant = HIGH_CLASS_PAIRS[consonant];
      else if (SONORANTS.includes(consonant)) {
        if (template.includes("ฺว")) template = template.replace("ฺว", "ฺหว");
        else lead = "ห";
      }
      mark = tone === 3 ? "่" : mid ? "๋" : "";
    } else if (tone === 4) {
      mark = mid ? "้" : "่";
    }
    return template.replace("C", lead + consonant).replace("T", mark);
  };

  const wordToThai = (word: string) => {
    const chars = [...word];
    return zhPinyinArray(word, "num")
      .map((syllable, i) =>
        /\p{Script=Han}/u.test(chars[i] ?? "")
          ? (syllableToThai(syllable.replace(/v/g, "ü")) ?? "")
          : syllable,
      )
      .join("");
  };

  const convert = async (text: string) => {
    const thai = await wordSplitter(text, "zh", word => wordToThai(stripZhUnit(word)));
    return thai.replace(/[０-９]/g, digit => String(digit.charCodeAt(0) - 0xff10));
  };

  return mapText(text, convert);
};
