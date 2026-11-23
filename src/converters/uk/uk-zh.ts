import { Text } from "types";

export const ukZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ukZhPrefixRules } = await import("data/uk/uk-zh_prefix.rules");
  const { ukIpaRules } = await import("data/uk/uk-ipa.rules");
  const { ukIpaZhRules } = await import("data/uk/uk-ipa_zh.rules");
  const { ipaIjRules } = await import("data/ipa/ipa_ij.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  const transliterator = RBT.fromRules(
    ukZhPrefixRules + ukIpaRules + ukIpaZhRules + ipaIjRules + ipaZhRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
