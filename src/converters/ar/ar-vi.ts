import { Text } from "types";

export const arVi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { ipaViRules } = await import("data/ipa/ipa-vi.rules");

  const transliterator = RBT.fromRules(ipaViRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await arIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await arIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
