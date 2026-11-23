import { Text } from "types";

export const slBn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { slIpaRules } = await import("data/sl/sl-ipa.rules");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");

  return convertText(text, slIpaRules + ipaBnRules);
};
