import { Text } from "types";

export const hyAr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hyIpaRules } = await import("data/hy/hy-ipa.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");
  const { ipaYyRules } = await import("data/ipa/ipa_yy.rules");

  return convertText(text, hyIpaRules + ipaArRules + ipaYyRules);
};
