import { Text } from "types";

export const csHe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { csIpaRules } = await import("data/cs-ipa.rules");
  const { ipaHeRules } = await import("data/ipa-he.rules");

  const transliterator = RBT.fromRules(csIpaRules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
