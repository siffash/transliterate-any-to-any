import { Text } from "types";

export const daZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { daIpaRules } = await import("constants/da-ipa.rules");
  const { ipaZhRules } = await import("constants/ipa-zh.rules");

  const transliterator = RBT.fromRules(daIpaRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
