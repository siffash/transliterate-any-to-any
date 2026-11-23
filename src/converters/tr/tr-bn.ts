import { Text } from "types";

export const trBn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { trIpaRules } = await import("data/tr/tr-ipa.rules");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");

  return convertText(text, trIpaRules + ipaBnRules);
};
