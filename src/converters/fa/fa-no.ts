import { Text } from "types";

export const faNo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { faIpa } = await import("converters/fa/fa-ipa");
  const { ipaNoRules } = await import("data/ipa/ipa-no.rules");

  const transliterator = RBT.fromRules(ipaNoRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await faIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await faIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
