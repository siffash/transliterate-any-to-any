import { Text } from "types";

export const frHi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { ipaHiLongARules } = await import("data/ipa/ipa-hi_long-a.rules");
  const { ipaHiORules } = await import("data/ipa/ipa-hi_o.rules");
  const { ipaHiRules } = await import("data/ipa/ipa-hi.rules");

  return convertText(text, ipaHiLongARules + ipaHiORules + ipaHiRules, { source: frIpa });
};
