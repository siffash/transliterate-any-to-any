import { Text } from "types";

export const urId = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaIdRules } = await import("constants/ipa-id.rules");

  const transliterator = RBT.fromRules(ipaIdRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await urIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await urIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
