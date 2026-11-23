import { Text } from "types";

export const mkHi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mkIpaRules } = await import("data/mk/mk-ipa.rules");
  const { ipaHiLongARules } = await import("data/ipa/ipa-hi_long-a.rules");
  const { ipaHiRules } = await import("data/ipa/ipa-hi.rules");

  return convertText(text, mkIpaRules + ipaHiLongARules + ipaHiRules);
};
