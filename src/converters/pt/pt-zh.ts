import { Text } from "types";

export const ptZh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaZhWRules } = await import("data/ipa/ipa-zh_w.rules");
  const { ptIpaRules } = await import("data/pt/pt-ipa.rules");
  const { ptIpaZhRules } = await import("data/pt/pt-ipa_zh.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");
  const { ipaZhSanRules } = await import("data/ipa/ipa-zh_san.rules");
  const { ipaZhLjeRules } = await import("data/ipa/ipa-zh_lje.rules");

  return convertText(
    text,
    ptIpaRules + ptIpaZhRules + ipaZhWRules + ipaZhSanRules + ipaZhLjeRules + ipaZhRules,
  );
};
