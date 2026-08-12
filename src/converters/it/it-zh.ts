import { Text } from "types";

export const itZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { itIpaRules } = await import("constants/it-ipa.rules");
  const { ipaZhRules } = await import("constants/ipa-zh.rules");

  const transliterator = RBT.fromRules(itIpaRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
