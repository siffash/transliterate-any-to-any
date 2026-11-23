import { Text } from "types";

export const itHi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { itIpaRules } = await import("data/it/it-ipa.rules");
  const { ipaHiLongARules } = await import("data/ipa/ipa-hi_long-a.rules");
  const { ipaHiRules } = await import("data/ipa/ipa-hi.rules");

  return convertText(text, itIpaRules + ipaHiLongARules + ipaHiRules);
};
