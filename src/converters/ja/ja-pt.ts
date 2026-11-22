import { Text } from "types";

export const jaPt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { normalizeJa } = await import("helpers/normalizeJa");
  const { jaLatnRules } = await import("data/ja/ja-latn.rules");
  const { latnPtRules } = await import("data/latn/latn-pt.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { getKuroshiro } = await import("helpers/getKuroshiro");
  const { markJaUnit, joinJaUnits } = await import("helpers/jaUnits");

  const kuroshiro = await getKuroshiro();

  const transliterator = RBT.fromRules(jaLatnRules + latnPtRules);

  const convert = async (text: string) => {
    const romanized = await wordSplitter(normalizeJa(text), "ja", async text =>
      markJaUnit(text, await kuroshiro.convert(text, { to: "romaji" })),
    );
    return joinJaUnits(transliterator.transliterate(romanized));
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};
