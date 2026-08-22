import { Text } from "types";

export const zhKo = async (text: Text) => {
  const { pinyin } = await import("pinyin-pro");
  const { CHO, HANJA_TO_HANGUL, JONG, JUNG, PINYIN_TO_JAMO } = await import("data/zh/zh-ko.map");

  const assembleHangul = (cho: string, jung: string, jong: string = ""): string => {
    const cIdx = CHO.indexOf(cho);
    const uIdx = JUNG.indexOf(jung);
    const oIdx = JONG.indexOf(jong);

    return String.fromCharCode(0xac00 + cIdx * 588 + uIdx * 28 + (oIdx < 0 ? 0 : oIdx));
  };

  const convert = (text: string) => {
    let result = "";
    const chars = Array.from(text);

    for (const char of chars) {
      // Priority 1: Check expanded Name Dictionary (Covers 95% of Korean names)
      if (HANJA_TO_HANGUL[char]) {
        result += HANJA_TO_HANGUL[char];
        continue;
      }

      if (!/[\u4e00-\u9fa5]/.test(char)) {
        result += char;
        continue;
      }

      // Priority 2: Modern Phonetic Logic (For non-standard names and cities)
      const py = pinyin(char, { toneType: "none", type: "array" })[0];

      // Modern convention shortcuts
      if (py === "xi") {
        result += assembleHangul("ㅅ", "ㅣ");
        continue;
      }
      if (py === "bei") {
        result += assembleHangul("ㅂ", "ㅔ") + assembleHangul("ㅇ", "ㅣ");
        continue;
      }

      let initial;
      let rest;
      if (!"aeiou".includes(py[0])) {
        initial = py[0];
        rest = py.substring(1);
      } else {
        initial = "y";
        rest = py;
      }

      const kCho = PINYIN_TO_JAMO[initial] || "ㅇ";
      let kJung;
      let kJong = "";

      // Vowel/Batchim logic for Chinese sounds
      if (rest.includes("ang")) {
        kJung = "ㅏ";
        kJong = "ㅇ";
      } else if (rest.includes("an")) {
        kJung = "ㅏ";
        kJong = "ㄴ";
      } else if (rest.includes("ing")) {
        kJung = "ㅣ";
        kJong = "ㅇ";
      } else if (rest.includes("in")) {
        kJung = "ㅣ";
        kJong = "ㄴ";
      } else if (rest.includes("eng")) {
        kJung = "ㅓ";
        kJong = "ㅇ";
      } else if (rest.includes("en")) {
        kJung = "ㅓ";
        kJong = "ㄴ";
      } else {
        kJung = PINYIN_TO_JAMO[rest] || "ㅣ";
      }

      result += assembleHangul(kCho, kJung, kJong);
    }

    return result;
  };

  if (typeof text === "string") {
    return convert(text);
  } else {
    return text.map(convert);
  }
};
