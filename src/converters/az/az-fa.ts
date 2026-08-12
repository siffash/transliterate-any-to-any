import { Text } from "types";

export const azFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { azIpaRules } = await import("constants/az-ipa.rules");
  const { ipaFaRules } = await import("constants/ipa-fa.rules");

  const transliterator = RBT.fromRules(azIpaRules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
