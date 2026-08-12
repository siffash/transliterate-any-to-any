import { Text } from "types";

export const bsHe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bsIpaRules } = await import("data/bs-ipa.rules");
  const { ipaHeRules } = await import("data/ipa-he.rules");

  const transliterator = RBT.fromRules(bsIpaRules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
