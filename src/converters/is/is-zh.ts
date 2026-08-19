import { Text } from "types";

export const isZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { isIpaRules } = await import("data/is/is-ipa.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  const transliterator = RBT.fromRules(isIpaRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
