import { Text } from "types";

export const svZh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { svIpaRules } = await import("data/sv/sv-ipa.rules");
  const { svNoIpaRRules } = await import("data/ipa/sv_no-ipa_r.rules");
  const { svIpaZhRules } = await import("data/sv/sv-ipa_zh.rules");
  const { ipaZhBorgRules } = await import("data/ipa/ipa-zh_borg.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  return convertText(text, svIpaRules + svNoIpaRRules + svIpaZhRules + ipaZhBorgRules + ipaZhRules);
};
