import { Text } from "types";

export const deFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { deIpaRules } = await import("constants/de-ipa.rules");
  const { ipaFaRules } = await import("constants/ipa-fa.rules");

  const transliterator = RBT.fromRules(deIpaRules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
