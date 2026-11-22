import { Text } from "types";

export const faAr = async (text: Text) => {
  const { faIpaMap } = await import("data/fa/fa-ipa.map");
  const { RBT } = await import("helpers/rbt");
  const { faNormRules } = await import("data/fa/fa_norm.rules");
  const { faArRules } = await import("data/fa/fa-ar.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { faIpa } = await import("converters/fa/fa-ipa");
  const { splitFaCompoundNames } = await import("helpers/splitFaCompoundNames");

  const normalizer = RBT.fromRules(faNormRules);
  const transliterator = RBT.fromRules(faArRules);

  const convert = async (text: string) =>
    transliterator.transliterate(
      await wordSplitter(
        splitFaCompoundNames(normalizer.transliterate(text)),
        "fa",
        async (word: string) => {
          const ipa = word.startsWith("ا") ? await faIpa<string>(word) : "";
          const initial = /^ʔ?[eiɪ]/.test(ipa) ? "إ" : /^ʔ?[æaɒou]/.test(ipa) ? "أ" : "";
          word = initial ? initial + word.slice(1) : word;
          return word.endsWith("ی") && /ɒː?$/.test(faIpaMap[word] ?? "")
            ? word.slice(0, -1) + "ى"
            : word;
        },
      ),
    );

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return await Promise.all(text.map(convert));
  }
};
