import { Text } from "types";

export const arNl = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { ipaNlRules } = await import("constants/ipa-nl.rules");

  const transliterator = RBT.fromRules(ipaNlRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await arIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await arIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
