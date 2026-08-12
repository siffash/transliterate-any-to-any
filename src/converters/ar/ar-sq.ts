import { Text } from "types";

export const arSq = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { ipaSqRules } = await import("constants/ipa-sq.rules");

  const transliterator = RBT.fromRules(ipaSqRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await arIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await arIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
