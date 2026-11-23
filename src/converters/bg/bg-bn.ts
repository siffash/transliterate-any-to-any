import { Text } from "types";

export const bgBn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bgIpaRules } = await import("data/bg/bg-ipa.rules");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");

  return convertText(text, bgIpaRules + ipaBnRules);
};
