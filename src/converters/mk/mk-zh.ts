import { Text } from "types";

export const mkZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { mkIpaRules } = await import("data/mk/mk-ipa.rules");
  const { ipaZhEvRules } = await import("data/ipa/ipa-zh_ev.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  const transliterator = RBT.fromRules(mkIpaRules + ipaZhEvRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
