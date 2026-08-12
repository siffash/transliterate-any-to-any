import { Text } from "types";

export const sqFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { sqIpaRules } = await import("constants/sq-ipa.rules");
  const { ipaFaRules } = await import("constants/ipa-fa.rules");

  const transliterator = RBT.fromRules(sqIpaRules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
