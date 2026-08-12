import { Text } from "types";

export const ruZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ruIpaRules } = await import("constants/ru-ipa.rules");
  const { ipaZhRules } = await import("constants/ipa-zh.rules");

  const transliterator = RBT.fromRules(ruIpaRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
