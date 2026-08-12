import { Text } from "types";

export const sqHe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { sqIpaRules } = await import("data/sq-ipa.rules");
  const { ipaHeRules } = await import("data/ipa-he.rules");

  const transliterator = RBT.fromRules(sqIpaRules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
