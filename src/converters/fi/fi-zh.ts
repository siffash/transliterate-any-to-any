import { Text } from "types";

export const fiZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { fiIpaRules } = await import("data/fi/fi-ipa.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  const transliterator = RBT.fromRules(fiIpaRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
