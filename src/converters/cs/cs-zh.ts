import { Text } from "types";

export const csZh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { csIpaRules } = await import("data/cs/cs-ipa.rules");
  const { csSkIpaRzhRules } = await import("data/ipa/cs_sk-ipa_rzh.rules");
  const { csIpaHardIRules } = await import("data/cs/cs-ipa_hard-i.rules");
  const { csIpaZhRules } = await import("data/cs/cs-ipa_zh.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");
  const { ipaZhChaRules } = await import("data/ipa/ipa-zh_cha.rules");
  const { ipaZhShoRules } = await import("data/ipa/ipa-zh_sho.rules");

  return convertText(
    text,
    csIpaHardIRules +
      csIpaRules +
      csSkIpaRzhRules +
      csIpaZhRules +
      ipaZhChaRules +
      ipaZhShoRules +
      ipaZhRules,
  );
};
