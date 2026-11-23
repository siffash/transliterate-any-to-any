import { Text } from "types";

export const msFa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { msIpaRules } = await import("data/ms/ms-ipa.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");

  return convertText(text, msIpaRules + ipaFaRules);
};
