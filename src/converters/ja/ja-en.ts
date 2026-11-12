import { Text } from "types";

// An administrative unit that kuromoji reads as a word of its own (成田|市) joins the name with a hyphen,
// lowercased: Narita-shi, Nakagawa-ku, Gojome-machi
const UNITS = new Set("市区町村郡県都府");
const UNIT = "\uE005";

const JOINED = new RegExp(`(?<=\\p{L}) ${UNIT}(\\p{L})`, "gu");

const joinUnits = (text: string) =>
  text.replace(JOINED, (_, letter: string) => `-${letter.toLowerCase()}`).replaceAll(UNIT, "");

export const jaEn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { normalizeJa } = await import("helpers/normalizeJa");
  const { jaEnRules } = await import("data/ja/ja-en.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { getKuroshiro } = await import("helpers/getKuroshiro");

  const kuroshiro = await getKuroshiro();

  const transliterator = RBT.fromRules(jaEnRules);

  const convert = async (text: string) => {
    const romanized = await wordSplitter(
      normalizeJa(text),
      "ja",
      async text =>
        (UNITS.has(text) ? UNIT : "") + (await kuroshiro.convert(text, { to: "romaji" })),
    );
    return joinUnits(transliterator.transliterate(romanized));
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};
