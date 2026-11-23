import { Text } from "types";

export const caBn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { caIpaRules } = await import("data/ca/ca-ipa.rules");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");

  return convertText(text, caIpaRules + ipaBnRules);
};
