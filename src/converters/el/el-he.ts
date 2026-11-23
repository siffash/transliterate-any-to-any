import { Text } from "types";

export const elHe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { elIpaRules } = await import("data/el/el-ipa.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  return convertText(text, elIpaRules + ipaHeRules);
};
