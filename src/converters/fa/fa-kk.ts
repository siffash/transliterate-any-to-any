import { Text } from "types";

export const faKk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ipaGemDRules } = await import("data/ipa/ipa_gemd.rules");
  const { faIpa } = await import("converters/fa/fa-ipa");
  const { faKkRules } = await import("data/fa/fa-kk.rules");
  const { ipaKkRules } = await import("data/ipa/ipa-kk.rules");

  const transliterator = RBT.fromRules(ipaGemDRules + faKkRules + ipaKkRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await faIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await faIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
