import { Text } from "types";

export const urIpa = async <T = Text>(text: Text, keepNasals = false): Promise<T> => {
  const { mapText } = await import("helpers/convertText");
  const { RBT } = await import("helpers/rbt");
  const { urIpaRules } = await import("data/ur/ur-ipa.rules");
  const { urNormRules } = await import("data/ur/ur_norm.rules");
  const { lookupUrIpa, deriveUrIpa } = await import("helpers/lookupUrIpa");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { filterIpa } = await import("helpers/filterIpa");
  const { breakClusters } = await import("helpers/breakClusters");
  const { markUrduSuffixes, joinUrduSuffixes } = await import("helpers/joinUrduSuffixes");
  const { markUrduArticles, joinUrduArticlesIpa } = await import("helpers/joinUrduArticles");

  const transliterator = RBT.fromRules(urIpaRules);
  const normalizer = RBT.fromRules(urNormRules);

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
    joinUrduArticlesIpa(
      joinUrduSuffixes(
        await wordSplitter(
          markUrduArticles(
            markUrduSuffixes(normalizer.transliterate(text)),
            word => !!lookupUrIpa(word),
          ),
          "ur",
          (word: string) =>
            spellNasals(
              (filterIpa(deriveUrIpa(word), word, "ur") || fallback(word))
                .replaceAll("ə\u0303", "ɐ\u0303")
                .replaceAll("ə", "a"),
            ),
        ),
      ),
    );

  return (await mapText(text, convert)) as T;
};
