import { Text } from "types";

export const lvZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { lvIpaRules } = await import("data/lv-ipa.rules");
  const { ipaZhRules } = await import("data/ipa-zh.rules");

  const transliterator = RBT.fromRules(lvIpaRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
