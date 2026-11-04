import { Text } from "types";

export const urAr = async (text: Text) => {
  const { urIpaMap } = await import("data/ur/ur-ipa.map");
  const { RBT } = await import("helpers/rbt");
  const { urNormRules } = await import("data/ur/ur_norm.rules");
  const { urArRules } = await import("data/ur/ur-ar.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const normalizer = RBT.fromRules(urNormRules);
  const transliterator = RBT.fromRules(urArRules);

  // A final ی read as ā, typed without the dagger alif (موسی), is alef maksura in Arabic: موسى
  const convert = async (text: string) =>
    transliterator.transliterate(
      await wordSplitter(normalizer.transliterate(text), "ur", (word: string) =>
        word.endsWith("ی") && /ɑː?$/.test(urIpaMap[word] ?? "") ? word + "ٰ" : word,
      ),
    );

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return await Promise.all(text.map(convert));
  }
};
