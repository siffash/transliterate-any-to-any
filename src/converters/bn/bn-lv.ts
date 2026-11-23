import { Text } from "types";

export const bnLv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bnIpaRules } = await import("data/bn/bn-ipa.rules");
  const { bnIpaARules } = await import("data/bn/bn-ipa_a.rules");
  const { ipaLvRules } = await import("data/ipa/ipa-lv.rules");

  return convertText(text, bnIpaRules + bnIpaARules + ipaLvRules + "::Title;");
};
