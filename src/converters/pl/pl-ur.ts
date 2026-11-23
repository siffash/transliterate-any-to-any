import { Text } from "types";

export const plUr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { plIpaRules } = await import("data/pl/pl-ipa.rules");
  const { ipaDevoiceVRules } = await import("data/ipa/ipa_devoice-v.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");
  const { plIpaUrRules } = await import("data/pl/pl-ipa_ur.rules");

  return convertText(text, plIpaRules + ipaDevoiceVRules + plIpaUrRules + ipaUrRules);
};
