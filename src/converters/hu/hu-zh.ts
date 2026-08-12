import { Text } from "types";

export const huZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { huIpaRules } = await import("constants/hu-ipa.rules");
  const { ipaZhRules } = await import("constants/ipa-zh.rules");

  const transliterator = RBT.fromRules(huIpaRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
