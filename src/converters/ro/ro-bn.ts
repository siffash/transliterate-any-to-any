import { Text } from "types";

export const roBn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { roIpaRules } = await import("data/ro/ro-ipa.rules");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");

  return convertText(text, roIpaRules + ipaBnRules);
};
