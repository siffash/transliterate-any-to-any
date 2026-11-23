import { Text } from "types";

export const viUr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { viIpaRules } = await import("data/vi/vi-ipa.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");
  const { viIpaUrRules } = await import("data/vi/vi-ipa_ur.rules");

  return convertText(text, viIpaRules + viIpaUrRules + ipaUrRules);
};
