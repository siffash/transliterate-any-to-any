import { Text } from "types";

export const koBg = async (text: Text) => {
  const Aromanize = (await import("aromanize")).default;
  const { RBT } = await import("helpers/rbt");
  const { koBgRules } = await import("data/ko/ko-bg.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { normalizeKo } = await import("helpers/normalizeKo");

  const transliterator = RBT.fromRules(koBgRules);

  const convert = async (text: string) => {
    const romanized = await wordSplitter(text, "ko", text =>
      normalizeKo(text, text => Aromanize.romanize(text), "latn"),
    );
    return transliterator.transliterate(romanized);
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};
