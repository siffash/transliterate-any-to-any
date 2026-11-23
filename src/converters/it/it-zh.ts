import { Text } from "types";

export const itZh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaZhWRules } = await import("data/ipa/ipa-zh_w.rules");
  const { itIpaRules } = await import("data/it/it-ipa.rules");
  const { ipaZhOvaRules } = await import("data/ipa/ipa-zh_ova.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");
  const { ipaZhSanRules } = await import("data/ipa/ipa-zh_san.rules");
  const { ipaZhChaRules } = await import("data/ipa/ipa-zh_cha.rules");
  const { ipaZhSRules } = await import("data/ipa/ipa-zh_s.rules");

  return convertText(
    text,
    itIpaRules +
      ipaZhWRules +
      ipaZhOvaRules +
      ipaZhSanRules +
      ipaZhChaRules +
      ipaZhSRules +
      ipaZhRules,
  );
};
