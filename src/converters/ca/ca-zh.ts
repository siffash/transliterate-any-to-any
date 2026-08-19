import { Text } from "types";

export const caZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { caIpaRules } = await import("data/ca/ca-ipa.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  const transliterator = RBT.fromRules(caIpaRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
