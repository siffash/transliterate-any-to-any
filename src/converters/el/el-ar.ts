import { Text } from "types";

export const elAr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { elIpaRules } = await import("data/el/el-ipa.rules");
  const { elIpaDRules } = await import("data/el/el-ipa_d.rules");
  const { elIpaXRules } = await import("data/el/el-ipa_x.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");

  return convertText(text, elIpaRules + elIpaDRules + elIpaXRules + ipaArRules);
};
