import { Text } from "types";

export const arTg = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { ipaTgRules } = await import("data/ipa/ipa-tg.rules");

  const transliterator = RBT.fromRules(ipaTgRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await arIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await arIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
