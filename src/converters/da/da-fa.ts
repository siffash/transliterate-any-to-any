import { Text } from "types";

export const daFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { daIpaRules } = await import("constants/da-ipa.rules");
  const { ipaFaRules } = await import("constants/ipa-fa.rules");

  const transliterator = RBT.fromRules(daIpaRules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
