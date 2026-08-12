import { Text } from "types";

export const daHe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { daIpaRules } = await import("constants/da-ipa.rules");
  const { ipaHeRules } = await import("constants/ipa-he.rules");

  const transliterator = RBT.fromRules(daIpaRules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
