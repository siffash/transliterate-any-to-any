import { Text } from "types";

export const esAr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { esIpaRules } = await import("constants/es-ipa.rules");
  const { ipaArRules } = await import("constants/ipa-ar.rules");

  const transliterator = RBT.fromRules(esIpaRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
