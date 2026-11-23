import { Text } from "types";

export const plBn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { plIpaRules } = await import("data/pl/pl-ipa.rules");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");

  return convertText(text, plIpaRules + ipaBnRules);
};
