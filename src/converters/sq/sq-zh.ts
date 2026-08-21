import { Text } from "types";

export const sqZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { sqIpaRules } = await import("data/sq/sq-ipa.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  const transliterator = RBT.fromRules(sqIpaRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
