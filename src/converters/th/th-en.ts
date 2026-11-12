import { Text } from "types";

export const thEn = async (text: Text) => {
  const { thRtgs } = await import("converters/th/th-ipa");
  const { RBT } = await import("helpers/rbt");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { normalizeTh } = await import("helpers/normalizeTh");
  const { thEnRules } = await import("data/th/th-en.rules");
  const { splitThaiPlace } = await import("helpers/splitThaiPlace");

  const toRtgs = await thRtgs();
  const transliterator = RBT.fromRules(thEnRules);

  const romanize = (word: string) => word.replace(/[^๐-๙]+/g, part => toRtgs(part));

  // The generic words of a place are cut off the reading of the whole name, which can differ from
  // the reading of its rest alone (แม่ฮ่องสอน Mae Hongson, not Hongason). The name stays whole if
  // its reading doesn't start with theirs
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

  // A place is a name of one word: สราลีย์ ทุ่งทองคำ is a person (Thungthongkham), so a list
  // (เชียงใหม่, เกาะสมุย) is read name by name
  const romanizeName = (name: string) =>
    wordSplitter(name, "th", /\s/.test(name.trim()) ? romanize : romanizePlace);

  const convert = async (text: string) => {
    const names = normalizeTh(text).split(/([^\p{L}\p{M}\p{N}\s]+)/u);
    const romanized = await Promise.all(
      names.map((name, i) => (i % 2 ? name : romanizeName(name))),
    );
    return transliterator.transliterate(romanized.join(""));
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};
