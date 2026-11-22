import { Text } from "types";

export const jaAr = async (text: Text) => {
  const { getPhonemizeAll } = await import("helpers/getPhonemize");
  const { normalizeJa } = await import("helpers/normalizeJa");
  const { toIPA } = await getPhonemizeAll();
  const { filterIpa } = await import("helpers/filterIpa");
  const { RBT } = await import("helpers/rbt");
  const { jaIpaRules } = await import("data/ja/ja-ipa.rules");
  const { jaIpaPrepassRules } = await import("data/ja/ja-ipa_prepass.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { markJaUnit, joinJaUnits } = await import("helpers/jaUnits");
  const { getKuroshiro } = await import("helpers/getKuroshiro");

  const kuroshiro = await getKuroshiro();

  const prepassTransliterator = RBT.fromRules(jaIpaPrepassRules);
  const transliterator = RBT.fromRules(jaIpaRules + ipaArRules);
  const exceptions = jaIpaRules.replace(/( ?> ?[^;]+;)|\[|]|\n/g, "");

  const convert = async (text: string) => {
    const ipa = await wordSplitter(normalizeJa(text), "ja", async text => {
      const hiragana = await kuroshiro.convert(text, { to: "hiragana" });
      const options = /\p{scx=Latin}/u.test(hiragana) ? {} : { language: "ja" };
      const ipa = toIPA(prepassTransliterator.transliterate(hiragana), options);
      return markJaUnit(text, filterIpa(ipa, hiragana, "ja", exceptions));
    });
    return joinJaUnits(transliterator.transliterate(ipa));
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};
