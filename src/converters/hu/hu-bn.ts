import { Text } from "types";

export const huBn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { huIpaRules } = await import("data/hu/hu-ipa.rules");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");

  return convertText(text, huIpaRules + ipaBnRules);
};
