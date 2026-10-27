import { Text } from "types";

export const roZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { roIpaRules } = await import("data/ro/ro-ipa.rules");
  const { roIpaZhRules } = await import("data/ro/ro-ipa_zh.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  const transliterator = RBT.fromRules(roIpaRules + roIpaZhRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
