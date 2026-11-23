import { Text } from "types";

export const kaHe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kaIpaRules } = await import("data/ka/ka-ipa.rules");
  const { kaIpaHeRules } = await import("data/ka/ka-ipa_he.rules");
  const { ipaHeXRules } = await import("data/ipa/ipa-he_x.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  return convertText(text, kaIpaRules + kaIpaHeRules + ipaHeXRules + ipaHeRules);
};
