import { Text } from "types";

export const csAr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { csIpaRules } = await import("constants/cs-ipa.rules");
  const { ipaArRules } = await import("constants/ipa-ar.rules");

  const transliterator = RBT.fromRules(csIpaRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
