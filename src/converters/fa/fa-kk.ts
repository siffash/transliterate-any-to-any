import { Text } from "types";

export const faKk = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { faIpa } = await import("converters/fa/fa-ipa");
  const { ipaKkRules } = await import("constants/ipa-kk.rules");

  const transliterator = RBT.fromRules(ipaKkRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await faIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await faIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
