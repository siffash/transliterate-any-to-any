import { Text } from "types";

export const ruAr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ruIpaRules } = await import("data/ru/ru-ipa.rules");
  const { ipaIjRules } = await import("data/ipa/ipa_ij.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");

  return convertText(text, ruIpaRules + ipaIjRules + ipaArRules);
};
