import { Text } from "types";

export const mtHi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mtIpaRules } = await import("data/mt/mt-ipa.rules");
  const { mtIpaHiRules } = await import("data/mt/mt-ipa_hi.rules");
  const { ipaHiLongARules } = await import("data/ipa/ipa-hi_long-a.rules");
  const { ipaHiRules } = await import("data/ipa/ipa-hi.rules");

  return convertText(text, mtIpaRules + mtIpaHiRules + ipaHiLongARules + ipaHiRules);
};
