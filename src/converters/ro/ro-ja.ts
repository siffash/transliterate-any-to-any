import { Text } from "types";

export const roJa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { roIpaRules } = await import("constants/ro-ipa.rules");
  const { ipaJaRules } = await import("constants/ipa-ja.rules");

  const transliterator = RBT.fromRules(roIpaRules + ipaJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
