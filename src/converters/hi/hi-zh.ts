import { Text } from "types";

export const hiZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { hiIpaGemRules } = await import("data/hi/hi-ipa_gem.rules");
  const { ipaZhFaiRules } = await import("data/ipa/ipa-zh_fai.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  const transliterator = RBT.fromRules(hiIpaRules + hiIpaGemRules + ipaZhFaiRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
