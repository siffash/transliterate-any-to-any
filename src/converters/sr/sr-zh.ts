import { Text } from "types";

export const srZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { srIpaRules } = await import("data/sr/sr-ipa.rules");
  const { ipaZhOvaRules } = await import("data/ipa/ipa-zh_ova.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");
  const { ipaZhLjeRules } = await import("data/ipa/ipa-zh_lje.rules");

  const transliterator = RBT.fromRules(srIpaRules + ipaZhOvaRules + ipaZhLjeRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
