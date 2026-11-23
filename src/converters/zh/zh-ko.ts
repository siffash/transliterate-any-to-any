import { Text } from "types";

export const zhKo = async (text: Text) => {
  const { mapText } = await import("helpers/convertText");
  const { ZH_KO_ETHNONYMS } = await import("data/zh/zh-ethnonyms.map");
  const { zhPinyinArray } = await import("helpers/zhPinyin");
  const { CHO, FINALS, INITIALS, JONG, JUNG, PLAIN_VOWELS, SYLLABIC, UNITS, ZERO_INITIAL } =
    await import("data/zh/zh-ko.map");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const assembleHangul = (cho: string, jung: string, jong = "") =>
    String.fromCharCode(
      0xac00 + CHO.indexOf(cho) * 588 + JUNG.indexOf(jung) * 28 + JONG.indexOf(jong),
    );

  const syllableToHangul = (syllable: string) => {
    if (SYLLABIC[syllable]) return SYLLABIC[syllable];
    const initial = /^(?:[zcs]h|[bpmfdtnlgkhjqxrzcs])/.exec(syllable)?.[0] ?? "";
    let final = initial ? syllable.slice(initial.length) : (ZERO_INITIAL[syllable] ?? syllable);
    if (/^[jqx]$/.test(initial)) final = final.replace(/^u/, "ü");
    if (/^(?:[zcs]h?|r)$/.test(initial) && final === "i") final = "ɨ";
    if (!FINALS[final]) return undefined;
    const [vowel, coda = "", rest = ""] = FINALS[final];
    const cho = initial ? INITIALS[initial] : "ㅇ";
    const jung = /[ㅈㅉㅊ]/.test(cho) ? (PLAIN_VOWELS[vowel] ?? vowel) : vowel;
    return assembleHangul(cho, jung, coda) + rest;
  };

  const wordToHangul = (word: string) => {
    const chars = [...word];
    return zhPinyinArray(word, "none")
      .map((syllable, i) =>
        /\p{Script=Han}/u.test(chars[i] ?? "")
          ? (syllableToHangul(syllable.replace(/v/g, "ü")) ?? "")
          : syllable,
      )
      .join("");
  };

  const placeToHangul = (word: string, givenName = false): string => {
    if (givenName) return wordToHangul(word);
    const chars = [...word];
    const last = chars.at(-1)!;
    if (word.startsWith("自治") && chars.length === 3)
      return "자치" + (UNITS[last] ?? wordToHangul(last));
    if (chars.length >= 3 && Object.hasOwn(UNITS, last))
      return placeToHangul(chars.slice(0, -1).join("")) + UNITS[last];
    if (chars.length >= 2 && last === "族") {
      const name = chars.slice(0, -1).join("");
      return (ZH_KO_ETHNONYMS[name] ?? wordToHangul(name)) + "족";
    }
    return wordToHangul(word);
  };

  const convert = async (text: string) => {
    const hangul = await wordSplitter(text, "zh", placeToHangul, false, true);
    return hangul.replace(/[０-９]/g, digit => String(digit.charCodeAt(0) - 0xff10));
  };

  return mapText(text, convert);
};
