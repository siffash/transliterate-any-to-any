import { Text } from "types";

export const plHi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { plIpaRules } = await import("data/pl/pl-ipa.rules");
  const { ipaHiLongARules } = await import("data/ipa/ipa-hi_long-a.rules");
  const { ipaHiRules } = await import("data/ipa/ipa-hi.rules");

  return convertText(text, plIpaRules + ipaHiLongARules + ipaHiRules);
};
