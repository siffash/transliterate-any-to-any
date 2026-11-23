import { Text } from "types";

export const idAr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { idIpaRules } = await import("data/id/id-ipa.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");

  return convertText(text, idIpaRules + ipaArRules);
};
