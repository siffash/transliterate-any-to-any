import { Text } from "types";

export const ruZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ruIpaRules } = await import("data/ru/ru-ipa.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  const transliterator = RBT.fromRules(ruIpaRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
