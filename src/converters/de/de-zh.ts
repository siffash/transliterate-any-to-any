import { Text } from "types";

export const deZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { deIpaRules } = await import("data/de/de-ipa.rules");
  const { deIpaIgRules } = await import("data/de/de-ipa_ig.rules");
  const { deIpaZhRules } = await import("data/de/de-ipa_zh.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");
  const { ipaZhShoRules } = await import("data/ipa/ipa-zh_sho.rules");
  const { ipaZhSRules } = await import("data/ipa/ipa-zh_s.rules");
  const { deIpaZhArnRules } = await import("data/de/de-ipa_zh-arn.rules");

  const transliterator = RBT.fromRules(
    deIpaRules +
      deIpaIgRules +
      deIpaZhArnRules +
      deIpaZhRules +
      ipaZhShoRules +
      ipaZhSRules +
      ipaZhRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
