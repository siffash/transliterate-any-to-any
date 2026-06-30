import { Text } from "types";

export const arBg = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { arIpa } = await import("converters/ar-ipa");
  const { ipaBgRules } = await import("constants/ipa-bg.rules");

  const transliterator = RBT.fromRules(ipaBgRules);

  if (typeof text === "string") {
    const ipa = await arIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await arIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
