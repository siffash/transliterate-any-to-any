import { Text } from "types";

export const faIs = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { faIpa } = await import("converters/fa/fa-ipa");
  const { ipaIsRules } = await import("constants/ipa-is.rules");

  const transliterator = RBT.fromRules(ipaIsRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await faIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await faIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
