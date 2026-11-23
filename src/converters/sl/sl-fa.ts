import { Text } from "types";

export const slFa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { slIpaRules } = await import("data/sl/sl-ipa.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");
  const { ipaFaNjRules } = await import("data/ipa/ipa-fa_nj.rules");

  return convertText(text, slIpaRules + ipaFaNjRules + ipaFaRules);
};
