import { Text } from "types";

export const urLt = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaLtRules } = await import("constants/ipa-lt.rules");

  const transliterator = RBT.fromRules(ipaLtRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await urIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await urIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
