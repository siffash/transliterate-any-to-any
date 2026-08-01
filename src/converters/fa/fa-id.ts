import { Text } from "types";

export const faId = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { faIpa } = await import("converters/fa/fa-ipa");
  const { ipaIdRules } = await import("constants/ipa-id.rules");

  const transliterator = RBT.fromRules(ipaIdRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await faIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await faIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
