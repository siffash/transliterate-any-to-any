import { Text } from "types";

export const nlAr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { nlIpaRules } = await import("data/nl/nl-ipa.rules");
  const { ipaArERules } = await import("data/ipa/ipa-ar_e.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");
  const { nlIpaXRules } = await import("data/nl/nl-ipa_x.rules");

  return convertText(text, nlIpaRules + nlIpaXRules + ipaArERules + ipaArRules);
};
