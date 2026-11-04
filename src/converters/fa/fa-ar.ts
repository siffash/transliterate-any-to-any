import { Text } from "types";

export const faAr = async (text: Text) => {
  const { faIpaMap } = await import("data/fa/fa-ipa.map");
  const { RBT } = await import("helpers/rbt");
  const { faNormRules } = await import("data/fa/fa_norm.rules");
  const { faArRules } = await import("data/fa/fa-ar.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const normalizer = RBT.fromRules(faNormRules);
  const transliterator = RBT.fromRules(faArRules);

  // A final ی read as ā (موسی, مصطفی) is alef maksura in Arabic: موسى
  const convert = async (text: string) =>
    transliterator.transliterate(
      await wordSplitter(normalizer.transliterate(text), "fa", (word: string) =>
        word.endsWith("ی") && /ɒː?$/.test(faIpaMap[word] ?? "") ? word.slice(0, -1) + "ى" : word,
      ),
    );

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return await Promise.all(text.map(convert));
  }
};
