import { Text } from "types";

export const faUr = async (text: Text) => {
  const { mapText } = await import("helpers/convertText");
  const { faIpaMap } = await import("data/fa/fa-ipa.map");
  const { RBT } = await import("helpers/rbt");
  const { faNormRules } = await import("data/fa/fa_norm.rules");
  const { faUrRules } = await import("data/fa/fa-ur.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { splitFaCompoundNames } = await import("helpers/splitFaCompoundNames");

  const normalizer = RBT.fromRules(faNormRules);
  const transliterator = RBT.fromRules(faUrRules);

  const convert = async (text: string) =>
    transliterator.transliterate(
      await wordSplitter(
        splitFaCompoundNames(normalizer.transliterate(text)),
        "fa",
        (word: string) =>
          word.endsWith("ی") && /ɒː?$/.test(faIpaMap[word] ?? "") ? word + "ٰ" : word,
      ),
    );

  return mapText(text, convert);
};
