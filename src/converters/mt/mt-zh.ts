import { Text } from "types";

export const mtZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { mtIpaRules } = await import("constants/mt-ipa.rules");
  const { ipaZhRules } = await import("constants/ipa-zh.rules");

  const transliterator = RBT.fromRules(mtIpaRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
