import { Text } from "types";

export const sqJa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { sqIpaRules } = await import("data/sq/sq-ipa.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");

  const transliterator = RBT.fromRules(sqIpaRules + ipaJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
