import { Text } from "types";

export const hiKa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaKaRules } = await import("data/ipa/ipa-ka.rules");

  return convertText(text, hiIpaRules + ipaKaRules);
};
