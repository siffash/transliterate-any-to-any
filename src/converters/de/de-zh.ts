import { Text } from "types";

export const deZh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { deIpaRules } = await import("data/de/de-ipa.rules");
  const { deIpaIgRules } = await import("data/de/de-ipa_ig.rules");
  const { deIpaZhRules } = await import("data/de/de-ipa_zh.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");
  const { ipaZhShoRules } = await import("data/ipa/ipa-zh_sho.rules");
  const { ipaZhSRules } = await import("data/ipa/ipa-zh_s.rules");

  return convertText(
    text,
    deIpaRules + deIpaIgRules + deIpaZhRules + ipaZhShoRules + ipaZhSRules + ipaZhRules,
  );
};
