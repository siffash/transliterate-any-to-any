import { Text } from "types";

export const esJa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { esIpaRules } = await import("data/es/es-ipa.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");

  const transliterator = RBT.fromRules(esIpaRules + ipaJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
