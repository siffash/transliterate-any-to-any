import { Text } from "types";

export const urIpa = async <T = Text>(text: Text, keepNasals = false): Promise<T> => {
  const { urIpaMap } = await import("data/ur/ur-ipa.map");
  const { RBT } = await import("helpers/rbt");
  const { urIpaRules } = await import("data/ur/ur-ipa.rules");
  const { urNormRules } = await import("data/ur/ur_norm.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { filterIpa } = await import("helpers/filterIpa");
  const { breakClusters } = await import("helpers/breakClusters");
  const { markUrduSuffixes, joinUrduSuffixes } = await import("helpers/joinUrduSuffixes");

  const transliterator = RBT.fromRules(urIpaRules);
  const normalizer = RBT.fromRules(urNormRules);

  const lookup = (word: string) =>
    urIpaMap[word] ??
    urIpaMap[word.replace(/^إ/, "ا")] ??
    urIpaMap[word.replace(/[\u064B-\u0652\u0670]/g, "")] ??
    urIpaMap[word.replace(/[\u064B-\u0652]/g, "").replace(/\u0670/g, "ا")];

  const isConsonant = (segment: string) => /^\p{L}/u.test(segment) && !/^[ɑeoiuəɪʊa]/.test(segment);
  const fallback = (word: string) =>
    breakClusters(
      transliterator.transliterate(word).match(/d͡ʒ[ʰʱ]?|t͡ʃ[ʰʱ]?|.[ʰʱː]*\p{M}*/gu) ?? [],
      isConsonant,
      "ə",
    );

  const spellNasals = (ipa: string) =>
    keepNasals
      ? ipa
      : ipa
          .normalize("NFD")
          .replace(/\u0303ː?(?=[nmŋɲɳ])/g, "")
          .replace(/\u0303ː?(?=[kɡg])/g, "ŋ")
          .replace(/\u0303ː?/g, "n")
          .normalize("NFC");

  const convert = async (text: string) =>
    joinUrduSuffixes(
      await wordSplitter(markUrduSuffixes(normalizer.transliterate(text)), "ur", (word: string) =>
        spellNasals(
          (filterIpa(lookup(word), word, "ur") || fallback(word))
            .replaceAll("ə\u0303", "ɐ\u0303")
            .replaceAll("ə", "a"),
        ),
      ),
    );

  if (typeof text === "string") {
    return (await convert(text)) as T;
  } else {
    return (await Promise.all(text.map(convert))) as T;
  }
};
