import { Text } from "types";

export const urJa = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaJaRules } = await import("constants/ipa-ja.rules");

  const transliterator = RBT.fromRules(ipaJaRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await urIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await urIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
