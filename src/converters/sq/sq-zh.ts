import { Text } from "types";

export const sqZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { sqIpaRules } = await import("data/sq/sq-ipa.rules");
  const { ipaZhOvaRules } = await import("data/ipa/ipa-zh_ova.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  const transliterator = RBT.fromRules(sqIpaRules + ipaZhOvaRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
