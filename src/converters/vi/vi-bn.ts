import { Text } from "types";

export const viBn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { viIpaRules } = await import("data/vi/vi-ipa.rules");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");

  return convertText(text, viIpaRules + ipaBnRules);
};
