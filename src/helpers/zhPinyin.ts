import { convert, pinyin } from "pinyin-pro";

type ToneType = "symbol" | "num" | "none";

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

export const zhPinyin = (text: string, separator = "'") =>
  readings(text, "symbol", "consecutive").join(separator);

export const zhPinyinArray = (text: string, toneType: ToneType) =>
  readings(text, toneType, "spaced");
