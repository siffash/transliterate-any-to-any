import { Text } from "types";

export const lvBn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lvIpaRules } = await import("data/lv/lv-ipa.rules");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");

  return convertText(text, lvIpaRules + ipaBnRules);
};
