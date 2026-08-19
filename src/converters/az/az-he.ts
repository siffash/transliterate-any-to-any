import { Text } from "types";

export const azHe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { azIpaRules } = await import("data/az/az-ipa.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  const transliterator = RBT.fromRules(azIpaRules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
