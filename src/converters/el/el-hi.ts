import { Text } from "types";

export const elHi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { elIpaRules } = await import("data/el/el-ipa.rules");
  const { ipaHiLongARules } = await import("data/ipa/ipa-hi_long-a.rules");
  const { ipaHiRules } = await import("data/ipa/ipa-hi.rules");
  const { ipaHiORules } = await import("data/ipa/ipa-hi_o.rules");

  return convertText(text, elIpaRules + ipaHiLongARules + ipaHiORules + ipaHiRules);
};
