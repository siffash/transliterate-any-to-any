import { Text } from "types";

export const lbHe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { lbIpaRules } = await import("constants/lb-ipa.rules");
  const { ipaHeRules } = await import("constants/ipa-he.rules");

  const transliterator = RBT.fromRules(lbIpaRules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
