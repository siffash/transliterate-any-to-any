import { Text } from "types";

export const arTr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { arTrRules } = await import("data/ar/ar-tr.rules");
  const { arLowerRules } = await import("data/ar/ar_lower.rules");
  const { ipaTrRules } = await import("data/ipa/ipa-tr.rules");

  const transliterator = RBT.fromRules(ipaTrRules + arTrRules + "::Title;" + arLowerRules);

  if (typeof text === "string") {
    const ipa = await arIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await arIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
