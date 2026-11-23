import { Text } from "types";

export const idHe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { idIpaRules } = await import("data/id/id-ipa.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  return convertText(text, idIpaRules + ipaHeRules);
};
