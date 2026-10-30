import { Text } from "types";

export const bnZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bnIpaGemRules } = await import("data/bn/bn-ipa_gem.rules");
  const { bnIpaRules } = await import("data/bn/bn-ipa.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  const transliterator = RBT.fromRules(bnIpaRules + bnIpaGemRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
