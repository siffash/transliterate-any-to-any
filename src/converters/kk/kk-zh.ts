import { Text } from "types";

export const kkZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { kkIpaRules } = await import("data/kk/kk-ipa.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  const transliterator = RBT.fromRules(kkIpaRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
