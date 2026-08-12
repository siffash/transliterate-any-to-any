import { Text } from "types";

export const roZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { roIpaRules } = await import("constants/ro-ipa.rules");
  const { ipaZhRules } = await import("constants/ipa-zh.rules");

  const transliterator = RBT.fromRules(roIpaRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
