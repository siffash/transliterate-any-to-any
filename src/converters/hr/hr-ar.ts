import { Text } from "types";

export const hrAr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hrIpaRules } = await import("data/hr/hr-ipa.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");

  return convertText(text, hrIpaRules + ipaArRules);
};
