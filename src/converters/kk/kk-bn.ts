import { Text } from "types";

export const kkBn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kkIpaRules } = await import("data/kk/kk-ipa.rules");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");

  return convertText(text, kkIpaRules + ipaBnRules);
};
