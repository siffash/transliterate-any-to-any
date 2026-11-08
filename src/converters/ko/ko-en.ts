import { Text } from "types";

export const koEn = async (text: Text) => {
  const Aromanize = (await import("aromanize")).default;
  const { RBT } = await import("helpers/rbt");
  const { koLatnAssimRules } = await import("data/ko/ko-latn_assim.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { normalizeKo } = await import("helpers/normalizeKo");
  const { koEnRules } = await import("data/ko/ko-en.rules");

  const transliterator = RBT.fromRules(koLatnAssimRules + koEnRules);

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
