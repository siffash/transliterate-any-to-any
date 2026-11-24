import { Text } from "types";

export const thHi = async (text: Text) => {
  const { thIpaText } = await import("converters/th/th-ipa");
  const { ipaHiORules } = await import("data/ipa/ipa-hi_o.rules");
  const { ipaHiRules } = await import("data/ipa/ipa-hi.rules");

  return thIpaText(text, ipaHiORules + ipaHiRules);
};
