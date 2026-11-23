import { Text } from "types";

export const nlHe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { nlIpaRules } = await import("data/nl/nl-ipa.rules");
  const { nlIpaHeRules } = await import("data/nl/nl-ipa_he.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  return convertText(text, nlIpaRules + nlIpaHeRules + ipaHeRules);
};
