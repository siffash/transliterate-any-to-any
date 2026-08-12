import { Text } from "types";

export const azJa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { azIpaRules } = await import("data/az-ipa.rules");
  const { ipaJaRules } = await import("data/ipa-ja.rules");

  const transliterator = RBT.fromRules(azIpaRules + ipaJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
