import { Text } from "types";

export const plZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { plIpaRules } = await import("data/pl-ipa.rules");
  const { ipaZhRules } = await import("data/ipa-zh.rules");

  const transliterator = RBT.fromRules(plIpaRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
