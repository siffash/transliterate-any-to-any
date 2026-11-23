import { Text } from "types";

export const jaIpa = async <T = Text>(text: Text, { units = false } = {}): Promise<T> => {
  const { getPhonemizeAll } = await import("helpers/getPhonemize");
  const { normalizeJa } = await import("helpers/normalizeJa");
  const { filterIpa } = await import("helpers/filterIpa");
  const { RBT } = await import("helpers/rbt");
  const { jaIpaRules } = await import("data/ja/ja-ipa.rules");
  const { jaIpaPrepassRules } = await import("data/ja/ja-ipa_prepass.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { getKuroshiro } = await import("helpers/getKuroshiro");
  const { markJaUnit } = await import("helpers/jaUnits");
  const { mapText } = await import("helpers/convertText");

  const { toIPA } = await getPhonemizeAll();
  const kuroshiro = await getKuroshiro();

  const prepassTransliterator = RBT.fromRules(jaIpaPrepassRules);
  const exceptions = jaIpaRules.replace(/( ?> ?[^;]+;)|\[|]|\n/g, "");

  return (await mapText(text, text =>
    wordSplitter(normalizeJa(text), "ja", async (text, _, tokens) => {
      const hiragana = await kuroshiro.convert(text, { to: "hiragana" }, tokens);
      const options = /\p{scx=Latin}/u.test(hiragana) ? {} : { language: "ja" };
      const ipa = filterIpa(
        toIPA(prepassTransliterator.transliterate(hiragana), options),
        hiragana,
        "ja",
        exceptions,
      );
      return units ? markJaUnit(text, ipa) : ipa;
    }),
  )) as T;
};
