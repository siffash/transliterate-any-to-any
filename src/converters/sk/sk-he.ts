import { Text } from "types";

export const skHe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { skIpaRules } = await import("data/sk/sk-ipa.rules");
  const { csSkIpaRzhRules } = await import("data/ipa/cs_sk-ipa_rzh.rules");
  const { ipaHeVbRules } = await import("data/ipa/ipa-he_vb.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  return convertText(text, skIpaRules + csSkIpaRzhRules + ipaHeVbRules + ipaHeRules);
};
