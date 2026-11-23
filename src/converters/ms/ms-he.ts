import { Text } from "types";

export const msHe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { msIpaRules } = await import("data/ms/ms-ipa.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  return convertText(text, msIpaRules + ipaHeRules);
};
