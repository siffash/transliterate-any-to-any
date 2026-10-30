import { Text } from "types";

export const arDa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ipaGemTRules } = await import("data/ipa/ipa_gemt.rules");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { ipaDaRules } = await import("data/ipa/ipa-da.rules");

  const transliterator = RBT.fromRules(ipaGemTRules + ipaDaRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await arIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await arIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
