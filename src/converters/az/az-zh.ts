import { Text } from "types";

export const azZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { azIpaRules } = await import("data/az/az-ipa.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  const transliterator = RBT.fromRules(azIpaRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
