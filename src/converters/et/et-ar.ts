import { Text } from "types";

export const etAr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { etIpaRules } = await import("data/et/et-ipa.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");

  return convertText(text, etIpaRules + ipaArRules);
};
