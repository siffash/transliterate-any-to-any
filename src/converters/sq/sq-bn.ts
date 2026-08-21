import { Text } from "types";

export const sqBn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { sqIpaRules } = await import("data/sq/sq-ipa.rules");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");

  const transliterator = RBT.fromRules(sqIpaRules + ipaBnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
