import { Text } from "types";

export const srHi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { srIpaRules } = await import("data/sr/sr-ipa.rules");
  const { ipaHiLongARules } = await import("data/ipa/ipa-hi_long-a.rules");
  const { ipaHiRules } = await import("data/ipa/ipa-hi.rules");

  return convertText(text, srIpaRules + ipaHiLongARules + ipaHiRules);
};
