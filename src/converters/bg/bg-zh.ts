import { Text } from "types";

export const bgZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bgIpaRules } = await import("constants/bg-ipa.rules");
  const { ipaZhRules } = await import("constants/ipa-zh.rules");

  const transliterator = RBT.fromRules(bgIpaRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
