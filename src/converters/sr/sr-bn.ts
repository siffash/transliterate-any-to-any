import { Text } from "types";

export const srBn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { srIpaRules } = await import("data/sr/sr-ipa.rules");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");

  return convertText(text, srIpaRules + ipaBnRules);
};
