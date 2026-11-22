import { Text } from "types";

export const jaTg = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { normalizeJa } = await import("helpers/normalizeJa");
  const { jaTgRules } = await import("data/ja/ja-tg.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { markJaUnit, joinJaUnits } = await import("helpers/jaUnits");
  const { getKuroshiro } = await import("helpers/getKuroshiro");

  const kuroshiro = await getKuroshiro();

  const transliterator = RBT.fromRules(jaTgRules);

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
