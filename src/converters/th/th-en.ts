import { Text } from "types";

export const thEn = async (text: Text) => {
  const { mapText } = await import("helpers/convertText");
  const { thRtgs } = await import("converters/th/th-ipa");
  const { RBT } = await import("helpers/rbt");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { normalizeTh } = await import("helpers/normalizeTh");
  const { thEnRules } = await import("data/th/th-en.rules");
  const { splitThaiPlace } = await import("helpers/splitThaiPlace");

  const toRtgs = await thRtgs();
  const transliterator = RBT.fromRules(thEnRules);

  const romanize = (word: string) => word.replace(/[^๐-๙]+/g, part => toRtgs(part));

  const romanizePlace = (word: string) => {
    const reading = romanize(word);
    const words: string[] = [];
    let start = 0;
    for (const generic of splitThaiPlace(word).slice(0, -1)) {
      const end = start + romanize(generic).length;
      if (reading.slice(start, end).toLowerCase() !== romanize(generic).toLowerCase()) {
        return reading;
      }
      words.push(reading.slice(start, end));
      start = end;
    }
    return start < reading.length ? [...words, reading.slice(start)].join(" ") : reading;
  };

  const romanizeName = (name: string) =>
    wordSplitter(name, "th", /\s/.test(name.trim()) ? romanize : romanizePlace);

  const convert = async (text: string) => {
    const names = normalizeTh(text).split(/([^\p{L}\p{M}\p{N}\s]+)/u);
    const romanized = await Promise.all(
      names.map((name, i) => (i % 2 ? name : romanizeName(name))),
    );
    return transliterator.transliterate(romanized.join(""));
  };

  return mapText(text, convert);
};
