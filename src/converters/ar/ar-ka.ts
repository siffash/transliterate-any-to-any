import { Text } from "types";

export const arKa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { ipaKaRules } = await import("data/ipa/ipa-ka.rules");
  const { ipaQKRules } = await import("data/ipa/ipa_q-k.rules");

  return convertText(text, ipaQKRules + ipaKaRules, { source: arIpa });
};
