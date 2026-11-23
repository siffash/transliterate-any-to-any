import { Text } from "types";

export const deUr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { deIpaRules } = await import("data/de/de-ipa.rules");
  const { ipaErRules } = await import("data/ipa/ipa_er.rules");
  const { ipaFinalSchwaERules } = await import("data/ipa/ipa_final-schwa-e.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");
  const { ipaUrRetroflexRules } = await import("data/ipa/ipa-ur_retroflex.rules");
  const { ipaUrInitialARules } = await import("data/ipa/ipa-ur_initial-a.rules");
  const { deIpaUrRules } = await import("data/de/de-ipa_ur.rules");

  return convertText(
    text,
    deIpaRules +
      ipaErRules +
      ipaFinalSchwaERules +
      ipaUrRetroflexRules +
      ipaUrInitialARules +
      deIpaUrRules +
      ipaUrRules,
  );
};
