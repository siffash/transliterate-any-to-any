import { Text } from "types";

export const esHe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaWURules } = await import("data/ipa/ipa_w-u.rules");
  const { esIpaRules } = await import("data/es/es-ipa.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");
  const { ipaHeXRules } = await import("data/ipa/ipa-he_x.rules");

  return convertText(text, esIpaRules + ipaWURules + ipaHeXRules + ipaHeRules);
};
