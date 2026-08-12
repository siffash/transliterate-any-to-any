import { Text } from "types";

export const trZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { trIpaRules } = await import("constants/tr-ipa.rules");
  const { ipaZhRules } = await import("constants/ipa-zh.rules");

  const transliterator = RBT.fromRules(trIpaRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
