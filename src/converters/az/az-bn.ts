import { Text } from "types";

export const azBn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { azIpaRules } = await import("data/az/az-ipa.rules");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");

  return convertText(text, azIpaRules + ipaBnRules);
};
