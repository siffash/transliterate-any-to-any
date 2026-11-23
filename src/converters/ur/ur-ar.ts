import { Text } from "types";

export const urAr = async (text: Text) => {
  const { mapText } = await import("helpers/convertText");
  const { urIpaMap } = await import("data/ur/ur-ipa.map");
  const { RBT } = await import("helpers/rbt");
  const { urNormRules } = await import("data/ur/ur_norm.rules");
  const { urArRules } = await import("data/ur/ur-ar.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const normalizer = RBT.fromRules(urNormRules);
  const transliterator = RBT.fromRules(urArRules);

  const convert = async (text: string) =>
    transliterator.transliterate(
      await wordSplitter(normalizer.transliterate(text), "ur", (word: string) =>
        word.endsWith("ی") && /ɑː?$/.test(urIpaMap[word] ?? "") ? word + "ٰ" : word,
      ),
    );

  return mapText(text, convert);
};
