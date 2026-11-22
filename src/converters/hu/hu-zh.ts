import { Text } from "types";

export const huZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { huIpaRules } = await import("data/hu/hu-ipa.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");
  const { ipaZhChaRules } = await import("data/ipa/ipa-zh_cha.rules");
  const { ipaZhShoRules } = await import("data/ipa/ipa-zh_sho.rules");
  const { huIpaZhRules } = await import("data/hu/hu-ipa_zh.rules");
  const { huZhBaoRules } = await import("data/hu/hu-zh_bao.rules");

  const transliterator = RBT.fromRules(
    huIpaRules + huIpaZhRules + ipaZhChaRules + ipaZhShoRules + ipaZhRules + huZhBaoRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
