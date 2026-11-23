import { Text } from "types";

export const elZh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { elIpaRules } = await import("data/el/el-ipa.rules");
  const { elIpaZhRules } = await import("data/el/el-ipa_zh.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  return convertText(text, elIpaRules + elIpaZhRules + ipaZhRules);
};
