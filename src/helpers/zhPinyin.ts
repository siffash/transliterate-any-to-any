import { convert, pinyin } from "pinyin-pro";

type ToneType = "symbol" | "num" | "none";

// pinyin-pro reads these as in ordinary words (都 dōu "all", 曾 céng "once", 仇 chóu "hatred", 藏 cáng "hide"),
// but names read them otherwise: 都匀 Duyun, 花都 Huadu, 曾 Zeng, 仇 Qiu, 雅鲁藏布 Yarlung Zangbo
const NAME_READINGS: Record<string, string> = { 都: "du1", 曾: "zeng1", 仇: "qiu2", 藏: "zang4" };

const nameReading = (char: string, toneType: ToneType) => {
  const reading = NAME_READINGS[char]!;
  if (toneType === "num") return reading;
  if (toneType === "none") return reading.replace(/\d$/, "");
  return convert(reading, { format: "numToSymbol" });
};

const readings = (text: string, toneType: ToneType, nonZh: "spaced" | "consecutive") =>
  pinyin(text, { type: "all", toneType, nonZh }).map(({ origin, pinyin, isZh }) =>
    isZh && Object.prototype.hasOwnProperty.call(NAME_READINGS, origin)
      ? nameReading(origin, toneType)
      : pinyin || origin,
  );

/**
 * The pinyin of a Chinese name with tone marks, its syllables joined by the separator
 * and other letters kept together (A股 → A'gǔ).
 */
export const zhPinyin = (text: string, separator = "'") =>
  readings(text, "symbol", "consecutive").join(separator);

/**
 * The pinyin of a Chinese name, one item per character (other letters as they are).
 */
export const zhPinyinArray = (text: string, toneType: ToneType) =>
  readings(text, toneType, "spaced");
