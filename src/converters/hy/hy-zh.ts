import { Text } from "types";

export const hyZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hyIpaRules } = await import("constants/hy-ipa.rules");
  const { ipaZhRules } = await import("constants/ipa-zh.rules");

  const transliterator = RBT.fromRules(hyIpaRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
