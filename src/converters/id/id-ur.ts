import { Text } from "types";

export const idUr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { idIpaRules } = await import("data/id/id-ipa.rules");
  const { msIdIpaAspRules } = await import("data/ipa/ms_id-ipa_asp.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");
  const { ipaUrInitialARules } = await import("data/ipa/ipa-ur_initial-a.rules");

  return convertText(text, idIpaRules + msIdIpaAspRules + ipaUrInitialARules + ipaUrRules);
};
