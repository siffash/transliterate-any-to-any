import { Text } from "types";

export const koHu = async (text: Text) => {
  const Aromanize = (await import("aromanize")).default;
  const { RBT } = await import("helpers/rbt");
  const { latnKoHyphenRules } = await import("data/latn/latn_ko-hyphen.rules");
  const { koLatnAssimRules } = await import("data/ko/ko-latn_assim.rules");
  const { koHuRules } = await import("data/ko/ko-hu.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { normalizeKo } = await import("helpers/normalizeKo");

  const transliterator = RBT.fromRules(koLatnAssimRules + koHuRules + latnKoHyphenRules);

  const convert = async (text: string) => {
    const romanized = await wordSplitter(text, "ko", text =>
      normalizeKo(text, text => Aromanize.romanize(text), "latn", { name: "·", unit: "‧" }),
    );
    return transliterator.transliterate(romanized);
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};
