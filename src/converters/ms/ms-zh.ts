import { Text } from "types";

export const msZh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { msIpaRules } = await import("data/ms/ms-ipa.rules");
  const { ipaZhCodaRules } = await import("data/ipa/ipa-zh_coda.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  return convertText(text, msIpaRules + ipaZhCodaRules + ipaZhRules);
};
