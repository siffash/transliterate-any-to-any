import { Text } from "types";

export const faSv = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { faIpa } = await import("converters/fa/fa-ipa");
  const { ipaSvRules } = await import("constants/ipa-sv.rules");

  const transliterator = RBT.fromRules(ipaSvRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await faIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await faIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
