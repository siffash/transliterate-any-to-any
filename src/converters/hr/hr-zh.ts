import { Text } from "types";

export const hrZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hrIpaRules } = await import("constants/hr-ipa.rules");
  const { ipaZhRules } = await import("constants/ipa-zh.rules");

  const transliterator = RBT.fromRules(hrIpaRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
