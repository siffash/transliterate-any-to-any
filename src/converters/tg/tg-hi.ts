import { Text } from "types";

export const tgHi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { tgIpaRules } = await import("data/tg/tg-ipa.rules");
  const { tgIpaHiRules } = await import("data/tg/tg-ipa_hi.rules");
  const { ipaHiRules } = await import("data/ipa/ipa-hi.rules");

  return convertText(text, tgIpaRules + tgIpaHiRules + ipaHiRules);
};
