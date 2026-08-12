import { Text } from "types";

export const noZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { noIpaRules } = await import("constants/no-ipa.rules");
  const { ipaZhRules } = await import("constants/ipa-zh.rules");

  const transliterator = RBT.fromRules(noIpaRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
