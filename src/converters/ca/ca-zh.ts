import { Text } from "types";

export const caZh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { caIpaRules } = await import("data/ca/ca-ipa.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");
  const { ipaZhSanRules } = await import("data/ipa/ipa-zh_san.rules");
  const { ipaZhKeRules } = await import("data/ipa/ipa-zh_ke.rules");
  const { ipaZhLjeRules } = await import("data/ipa/ipa-zh_lje.rules");
  const { ipaZhSRules } = await import("data/ipa/ipa-zh_s.rules");

  return convertText(
    text,
    caIpaRules + ipaZhSanRules + ipaZhKeRules + ipaZhLjeRules + ipaZhSRules + ipaZhRules,
  );
};
