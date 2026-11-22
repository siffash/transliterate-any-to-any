import { Text } from "types";

export const bgZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bgZhPrefixRules } = await import("data/bg/bg-zh_prefix.rules");
  const { bgIpaRules } = await import("data/bg/bg-ipa.rules");
  const { ipaZhEvRules } = await import("data/ipa/ipa-zh_ev.rules");
  const { ipaZhChaRules } = await import("data/ipa/ipa-zh_cha.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  const transliterator = RBT.fromRules(
    bgZhPrefixRules + bgIpaRules + ipaZhChaRules + ipaZhEvRules + ipaZhRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
