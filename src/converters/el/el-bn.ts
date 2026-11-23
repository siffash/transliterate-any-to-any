import { Text } from "types";

export const elBn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { elIpaRules } = await import("data/el/el-ipa.rules");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");

  return convertText(text, elIpaRules + ipaBnRules);
};
