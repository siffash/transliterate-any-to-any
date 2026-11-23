import { Text } from "types";

export const ruHe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ruIpaRules } = await import("data/ru/ru-ipa.rules");
  const { ipaIjRules } = await import("data/ipa/ipa_ij.rules");
  const { ipaHeVbRules } = await import("data/ipa/ipa-he_vb.rules");
  const { ipaHeXRules } = await import("data/ipa/ipa-he_x.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  return convertText(text, ruIpaRules + ipaIjRules + ipaHeVbRules + ipaHeXRules + ipaHeRules);
};
