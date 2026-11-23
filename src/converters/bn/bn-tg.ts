import { Text } from "types";

export const bnTg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bnIpaRules } = await import("data/bn/bn-ipa.rules");
  const { bnIpaRaiseRules } = await import("data/bn/bn-ipa_raise.rules");
  const { ipaTgRules } = await import("data/ipa/ipa-tg.rules");

  return convertText(text, bnIpaRules + bnIpaRaiseRules + ipaTgRules + "::Title;");
};
