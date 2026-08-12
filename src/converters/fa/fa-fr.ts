import { Text } from "types";

export const faFr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { faIpa } = await import("converters/fa/fa-ipa");
  const { ipaFrRules } = await import("data/ipa-fr.rules");

  const transliterator = RBT.fromRules(ipaFrRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await faIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await faIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
