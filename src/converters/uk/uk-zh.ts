import { Text } from "types";

export const ukZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ukIpaRules } = await import("data/uk/uk-ipa.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  const transliterator = RBT.fromRules(ukIpaRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
