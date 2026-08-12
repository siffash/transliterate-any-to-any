import { Text } from "types";

export const roFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { roIpaRules } = await import("constants/ro-ipa.rules");
  const { ipaFaRules } = await import("constants/ipa-fa.rules");

  const transliterator = RBT.fromRules(roIpaRules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
