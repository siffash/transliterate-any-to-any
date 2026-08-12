import { Text } from "types";

export const esFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { esIpaRules } = await import("constants/es-ipa.rules");
  const { ipaFaRules } = await import("constants/ipa-fa.rules");

  const transliterator = RBT.fromRules(esIpaRules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
