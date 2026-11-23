import { Text } from "types";

export const skFa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { skIpaRules } = await import("data/sk/sk-ipa.rules");
  const { ipaDevoiceVRules } = await import("data/ipa/ipa_devoice-v.rules");
  const { csSkIpaRzhKoRules } = await import("data/ipa/cs_sk-ipa_rzh-ko.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");
  const { skIpaFaRules } = await import("data/sk/sk-ipa_fa.rules");

  return convertText(
    text,
    skIpaRules + skIpaFaRules + ipaDevoiceVRules + csSkIpaRzhKoRules + ipaFaRules,
  );
};
