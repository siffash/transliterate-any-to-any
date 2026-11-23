import { Text } from "types";

export const azHi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { azIpaRules } = await import("data/az/az-ipa.rules");
  const { ipaHiLongARules } = await import("data/ipa/ipa-hi_long-a.rules");
  const { ipaHiRules } = await import("data/ipa/ipa-hi.rules");

  return convertText(text, azIpaRules + ipaHiLongARules + ipaHiRules);
};
