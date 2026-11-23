import { Text } from "types";

export const svUr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { svIpaRules } = await import("data/sv/sv-ipa.rules");
  const { svNoIpaRRules } = await import("data/ipa/sv_no-ipa_r.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");
  const { ipaUrRetroflexRules } = await import("data/ipa/ipa-ur_retroflex.rules");
  const { ipaUrInitialARules } = await import("data/ipa/ipa-ur_initial-a.rules");
  const { svIpaUrRules } = await import("data/sv/sv-ipa_ur.rules");

  return convertText(
    text,
    svIpaRules +
      svIpaUrRules +
      svNoIpaRRules +
      ipaUrRetroflexRules +
      ipaUrInitialARules +
      ipaUrRules,
  );
};
