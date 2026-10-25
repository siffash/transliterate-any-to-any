import { Text } from "types";

export const zhKo = async (text: Text) => {
  const { pinyin } = await import("pinyin-pro");
  const { CHO, FINALS, INITIALS, JONG, JUNG, PLAIN_VOWELS, SYLLABIC, ZERO_INITIAL } =
    await import("data/zh/zh-ko.map");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const assembleHangul = (cho: string, jung: string, jong = "") =>
    String.fromCharCode(
      0xac00 + CHO.indexOf(cho) * 588 + JUNG.indexOf(jung) * 28 + JONG.indexOf(jong),
    );

  // A toneless pinyin syllable in Hangul, by the official table (zhang 장, xiong 슝, gui 구이)
  const syllableToHangul = (syllable: string) => {
    if (SYLLABIC[syllable]) return SYLLABIC[syllable];
    const initial = /^(?:[zcs]h|[bpmfdtnlgkhjqxrzcs])/.exec(syllable)?.[0] ?? "";
    let final = initial ? syllable.slice(initial.length) : (ZERO_INITIAL[syllable] ?? syllable);
    // ju, que, xuan, jun are jü, qüe, xüan, jün
    if (/^[jqx]$/.test(initial)) final = final.replace(/^u/, "ü");
    if (/^(?:[zcs]h?|r)$/.test(initial) && final === "i") final = "ɨ";
    if (!FINALS[final]) return undefined;
    const [vowel, coda = "", rest = ""] = FINALS[final];
    const cho = initial ? INITIALS[initial] : "ㅇ";
    const jung = /[ㅈㅉㅊ]/.test(cho) ? (PLAIN_VOWELS[vowel] ?? vowel) : vowel;
    return assembleHangul(cho, jung, coda) + rest;
  };

  // pinyin-pro gives one item per character; letters other than Han ones stay as they are (A股)
  const wordToHangul = (word: string) => {
    const chars = [...word];
    return pinyin(word, { toneType: "none", type: "array" })
      .map((syllable, i) =>
        /\p{Script=Han}/u.test(chars[i] ?? "")
          ? (syllableToHangul(syllable.replace(/v/g, "ü")) ?? chars[i])
          : syllable,
      )
      .join("");
  };

  const convert = async (text: string) => {
    const hangul = await wordSplitter(text, "zh", wordToHangul, false, true);
    return hangul.replace(/[０-９]/g, digit => String(digit.charCodeAt(0) - 0xff10));
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};
