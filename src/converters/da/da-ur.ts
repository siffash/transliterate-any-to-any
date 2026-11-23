import { Text } from "types";

export const daUr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { daIpaRules } = await import("data/da/da-ipa.rules");
  const { daIpaRRules } = await import("data/da/da-ipa_r.rules");
  const { ipaFinalSchwaERules } = await import("data/ipa/ipa_final-schwa-e.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");
  const { ipaUrRetroflexRules } = await import("data/ipa/ipa-ur_retroflex.rules");
  const { ipaAspirationDropRules } = await import("data/ipa/ipa_aspiration-drop.rules");

  return convertText(
    text,
    daIpaRules +
      daIpaRRules +
      ipaFinalSchwaERules +
      ipaUrRetroflexRules +
      ipaAspirationDropRules +
      ipaUrRules,
  );
};
