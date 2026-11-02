import { Text } from "types";

export const jaKa = async (text: Text) => {
  const { getPhonemizeAll } = await import("helpers/getPhonemize");
  const { normalizeJa } = await import("helpers/normalizeJa");
  const { toIPA } = await getPhonemizeAll();
  const { filterIpa } = await import("helpers/filterIpa");
  const { RBT } = await import("helpers/rbt");
  const { jaIpaRules } = await import("data/ja/ja-ipa.rules");
  const { jaIpaPrepassRules } = await import("data/ja/ja-ipa_prepass.rules");
  const { ipaKaRules } = await import("data/ipa/ipa-ka.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { getKuroshiro } = await import("helpers/getKuroshiro");

  const kuroshiro = await getKuroshiro();

  const prepassTransliterator = RBT.fromRules(jaIpaPrepassRules);
  const transliterator = RBT.fromRules(jaIpaRules + ipaKaRules);
  const exceptions = jaIpaRules.replace(/( ?> ?[^;]+;)|\[|]|\n/g, "");

  const convert = async (text: string) => {
    const ipa = await wordSplitter(normalizeJa(text), "ja", async text => {
      const hiragana = await kuroshiro.convert(text, { to: "hiragana" });
      // Force Japanese: phonemize otherwise reads the pre-pass Latin letters at the start
      // of a word as English, and lone kanji as Chinese
      const options = /\p{scx=Latin}/u.test(hiragana) ? {} : { language: "ja" };
      const ipa = toIPA(prepassTransliterator.transliterate(hiragana), options);
      return filterIpa(ipa, hiragana, "ja", exceptions);
    });
    return transliterator.transliterate(ipa);
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};
