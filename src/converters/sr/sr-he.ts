import { Text } from "types";

export const srHe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { srIpaRules } = await import("constants/sr-ipa.rules");
  const { ipaHeRules } = await import("constants/ipa-he.rules");

  const transliterator = RBT.fromRules(srIpaRules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
