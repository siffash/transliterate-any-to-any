import { Text } from "types";

export const koTg = async (text: Text) => {
  const Aromanize = (await import("aromanize")).default;
  const { RBT } = await import("helpers/rbt");
  const { koTgRules } = await import("data/ko/ko-tg.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { normalizeKo } = await import("helpers/normalizeKo");

  const transliterator = RBT.fromRules(koTgRules);

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
