import { Text } from "types";

export const faUr = async (text: Text) => {
  const { faIpaMap } = await import("data/fa/fa-ipa.map");
  const { RBT } = await import("helpers/rbt");
  const { faNormRules } = await import("data/fa/fa_norm.rules");
  const { faUrRules } = await import("data/fa/fa-ur.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const normalizer = RBT.fromRules(faNormRules);
  const transliterator = RBT.fromRules(faUrRules);

  // A final ی read as ā (موسی, مصطفی) takes the dagger alif in Urdu: موسیٰ
  const convert = async (text: string) =>
    transliterator.transliterate(
      await wordSplitter(normalizer.transliterate(text), "fa", (word: string) =>
        word.endsWith("ی") && /ɒː?$/.test(faIpaMap[word] ?? "") ? word + "ٰ" : word,
      ),
    );

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return await Promise.all(text.map(convert));
  }
};
