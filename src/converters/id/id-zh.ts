import { Text } from "types";

export const idZh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { idIpaRules } = await import("data/id/id-ipa.rules");
  const { ipaZhCodaRules } = await import("data/ipa/ipa-zh_coda.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  return convertText(text, idIpaRules + ipaZhCodaRules + ipaZhRules);
};
