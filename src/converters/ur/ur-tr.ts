import { Text } from "types";

export const urTr = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaTrRules } = await import("constants/ipa-tr.rules");

  const transliterator = RBT.fromRules(ipaTrRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await urIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await urIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
