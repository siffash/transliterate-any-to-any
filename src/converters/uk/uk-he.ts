import { Text } from "types";

export const ukHe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ukIpaRules } = await import("data/uk/uk-ipa.rules");
  const { ukIpaVRules } = await import("data/uk/uk-ipa_v.rules");
  const { ipaIjRules } = await import("data/ipa/ipa_ij.rules");
  const { ipaHeVbRules } = await import("data/ipa/ipa-he_vb.rules");
  const { ipaHeXRules } = await import("data/ipa/ipa-he_x.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  return convertText(
    text,
    ukIpaRules + ukIpaVRules + ipaIjRules + ipaHeVbRules + ipaHeXRules + ipaHeRules,
  );
};
