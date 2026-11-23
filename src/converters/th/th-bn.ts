import { Text } from "types";

export const thBn = async (text: Text) => {
  const { thIpaText } = await import("converters/th/th-ipa");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");

  return thIpaText(text, ipaBnRules);
};
