import { Text } from "types";

export const bsZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bsIpaRules } = await import("data/bs/bs-ipa.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  const transliterator = RBT.fromRules(bsIpaRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
