import { Text } from "types";

export const skBn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { skIpaRules } = await import("data/sk/sk-ipa.rules");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");

  return convertText(text, skIpaRules + ipaBnRules);
};
