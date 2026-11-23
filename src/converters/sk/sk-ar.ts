import { Text } from "types";

export const skAr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { skIpaRules } = await import("data/sk/sk-ipa.rules");
  const { csSkIpaRzhArRules } = await import("data/ipa/cs_sk-ipa_rzh-ar.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");

  return convertText(text, skIpaRules + csSkIpaRzhArRules + ipaArRules);
};
