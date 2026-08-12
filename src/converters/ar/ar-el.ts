import { Text } from "types";

export const arEl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { ipaElRules } = await import("constants/ipa-el.rules");

  const transliterator = RBT.fromRules(ipaElRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await arIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await arIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
