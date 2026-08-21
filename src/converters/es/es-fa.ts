import { Text } from "types";

export const esFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { esIpaRules } = await import("data/es/es-ipa.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");

  const transliterator = RBT.fromRules(esIpaRules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
