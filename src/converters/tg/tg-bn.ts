import { Text } from "types";

export const tgBn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { tgIpaRules } = await import("data/tg/tg-ipa.rules");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");

  return convertText(text, tgIpaRules + ipaBnRules);
};
