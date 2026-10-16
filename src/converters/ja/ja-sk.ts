import { Text } from "types";

export const jaSk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { normalizeJa } = await import("helpers/normalizeJa");
  const { jaLatnRules } = await import("data/ja/ja-latn.rules");
  const { latnSkRules } = await import("data/latn/latn-sk.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { getKuroshiro } = await import("helpers/getKuroshiro");

  const kuroshiro = await getKuroshiro();

  const transliterator = RBT.fromRules(jaLatnRules + latnSkRules);

  const convert = async (text: string) => {
    const romanized = await wordSplitter(
      normalizeJa(text),
      "ja",
      async text => await kuroshiro.convert(text, { to: "romaji" }),
    );
    return transliterator.transliterate(romanized);
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};
