import { Text } from "types";

export const hrZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hrIpaRules } = await import("data/hr/hr-ipa.rules");
  const { ipaZhOvaRules } = await import("data/ipa/ipa-zh_ova.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  const transliterator = RBT.fromRules(hrIpaRules + ipaZhOvaRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
