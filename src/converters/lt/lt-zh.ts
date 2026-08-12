import { Text } from "types";

export const ltZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ltIpaRules } = await import("constants/lt-ipa.rules");
  const { ipaZhRules } = await import("constants/ipa-zh.rules");

  const transliterator = RBT.fromRules(ltIpaRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
