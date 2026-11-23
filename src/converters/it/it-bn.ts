import { Text } from "types";

export const itBn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { itIpaRules } = await import("data/it/it-ipa.rules");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");

  return convertText(text, itIpaRules + ipaBnRules);
};
