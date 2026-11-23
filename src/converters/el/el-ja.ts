import { Text } from "types";

export const elJa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { elIpaRules } = await import("data/el/el-ipa.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");
  const { elIpaDRules } = await import("data/el/el-ipa_d.rules");
  const { elIpaLiRules } = await import("data/el/el-ipa_li.rules");

  return convertText(text, elIpaRules + elIpaDRules + elIpaLiRules + ipaJaRules);
};
