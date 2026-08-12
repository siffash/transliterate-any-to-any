import { Text } from "types";

export const azAr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { azIpaRules } = await import("data/az-ipa.rules");
  const { ipaArRules } = await import("data/ipa-ar.rules");

  const transliterator = RBT.fromRules(azIpaRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
