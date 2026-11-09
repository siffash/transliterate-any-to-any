import { Text } from "types";

export const ptZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ipaZhWRules } = await import("data/ipa/ipa-zh_w.rules");
  const { ptIpaRules } = await import("data/pt/pt-ipa.rules");
  const { ptIpaZhRules } = await import("data/pt/pt-ipa_zh.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  const transliterator = RBT.fromRules(ptIpaRules + ptIpaZhRules + ipaZhWRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
