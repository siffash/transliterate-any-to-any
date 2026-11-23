import { Text } from "types";

export const hyKa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hyIpaRules } = await import("data/hy/hy-ipa.rules");
  const { hyIpaKaRules } = await import("data/hy/hy-ipa_ka.rules");
  const { ipaKaRules } = await import("data/ipa/ipa-ka.rules");

  return convertText(text, hyIpaRules + hyIpaKaRules + ipaKaRules);
};
