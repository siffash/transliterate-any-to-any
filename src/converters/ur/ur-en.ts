import { Text } from "types";

export const urEn = async <T = Text>(text: Text): Promise<T> => {
  const { urIpaMap } = await import("data/ur/ur-ipa.map");
  const { RBT } = await import("helpers/rbt");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaEnRules } = await import("data/ipa/ipa-en.rules");
  const { urEnRules } = await import("data/ur/ur-en.rules");
  const { urIpaEnRules } = await import("data/ur/ur-ipa_en.rules");
  const { urNormRules } = await import("data/ur/ur_norm.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { filterIpa } = await import("helpers/filterIpa");
  const { breakClusters } = await import("helpers/breakClusters");
  const { markUrduSuffixes, joinUrduSuffixes } = await import("helpers/joinUrduSuffixes");
  const { markUrduArticles, joinUrduArticles } = await import("helpers/joinUrduArticles");

  const transliteratorIpa = RBT.fromRules(urIpaEnRules + ipaAspHRules + ipaEnRules + "::Title;");
  const transliteratorEn = RBT.fromRules(urEnRules);
  const normalizer = RBT.fromRules(urNormRules);

  // Arabic spells an initial i- with a hamza below (إبراهيم), the map with a plain alef (ابراہیم); the map
  // keys have no harakat (محمّد → محمد)
  const lookup = (word: string) =>
    urIpaMap[word] ??
    urIpaMap[word.replace(/^إ/, "ا")] ??
    urIpaMap[word.replace(/[\u064B-\u0652\u0670]/g, "")] ??
    // a superscript alef is a long a (رحمٰن as رحمان)
    urIpaMap[word.replace(/[\u064B-\u0652]/g, "").replace(/\u0670/g, "ا")];

  const convert = async (text: string) =>
    joinUrduArticles(
      joinUrduSuffixes(
        await wordSplitter(
          markUrduArticles(
            markUrduSuffixes(normalizer.transliterate(text)),
            word => !!lookup(word),
          ),
          "ur",
          (word: string) => {
            const ipa = filterIpa(lookup(word), word, "ur")
              ?.replaceAll("ə\u0303", "ɐ\u0303")
              .replaceAll("ə", "a");
            if (ipa) {
              return transliteratorIpa.transliterate(ipa);
            } else {
              // A word missing from the map gets its unwritten vowels back as zabars (ہشتپر → ہَشتَپر → Hashtapr). An
              // aspirate (بھ) is one sound; a final ہ is a vowel, so it stands as an empty segment (مکہ → مَکہ)
              const [, core, end] = word.match(/^(.*?)(ہ?)$/u)!;
              const segments: string[] = core.match(/.ھ?\p{M}*/gu) ?? [];
              if (end) segments.push("");
              const isConsonant = (segment: string) => /^(?![اآویےۓۂ])\p{L}/u.test(segment);
              if (
                /^[وی]$/u.test(segments[0] ?? "") &&
                segments.length > 2 &&
                isConsonant(segments[1])
              ) {
                segments.splice(1, 0, "َ");
              }
              return transliteratorEn.transliterate(
                breakClusters(segments, isConsonant, "َ") + end,
              );
            }
          },
        ),
      ),
    );

  if (typeof text === "string") {
    return (await convert(text)) as T;
  } else {
    return (await Promise.all(text.map(convert))) as T;
  }
};
