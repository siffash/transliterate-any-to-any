import { Text } from "types";

export const fiZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { fiIpaRules } = await import("data/fi/fi-ipa.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");
  const { fiIpaZhRules } = await import("data/fi/fi-ipa_zh.rules");

  const transliterator = RBT.fromRules(fiIpaRules + fiIpaZhRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
