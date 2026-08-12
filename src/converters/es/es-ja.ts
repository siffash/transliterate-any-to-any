import { Text } from "types";

export const esJa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { esIpaRules } = await import("constants/es-ipa.rules");
  const { ipaJaRules } = await import("constants/ipa-ja.rules");

  const transliterator = RBT.fromRules(esIpaRules + ipaJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
