import { Text } from "types";

export const csJa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { csIpaRules } = await import("constants/cs-ipa.rules");
  const { ipaJaRules } = await import("constants/ipa-ja.rules");

  const transliterator = RBT.fromRules(csIpaRules + ipaJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
