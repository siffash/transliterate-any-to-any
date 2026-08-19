import { Text } from "types";

export const trHe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { trIpaRules } = await import("data/tr/tr-ipa.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  const transliterator = RBT.fromRules(trIpaRules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
