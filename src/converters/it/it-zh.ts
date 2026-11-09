import { Text } from "types";

export const itZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ipaZhWRules } = await import("data/ipa/ipa-zh_w.rules");
  const { itIpaRules } = await import("data/it/it-ipa.rules");
  const { ipaZhOvaRules } = await import("data/ipa/ipa-zh_ova.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  const transliterator = RBT.fromRules(itIpaRules + ipaZhWRules + ipaZhOvaRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
