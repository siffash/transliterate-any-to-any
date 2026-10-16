import { Text } from "types";

export const jaId = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { normalizeJa } = await import("helpers/normalizeJa");
  const { jaLatnRules } = await import("data/ja/ja-latn.rules");
  const { latnIdRules } = await import("data/latn/latn-id.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { getKuroshiro } = await import("helpers/getKuroshiro");

  const kuroshiro = await getKuroshiro();

  const transliterator = RBT.fromRules(jaLatnRules + latnIdRules);

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
