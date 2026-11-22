import { Text } from "types";

export const urHy = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaHyRRules } = await import("data/ipa/ipa-hy_r.rules");
  const { ipaHyRules } = await import("data/ipa/ipa-hy.rules");

  const transliterator = RBT.fromRules(ipaHyRRules + ipaHyRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await urIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await urIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
