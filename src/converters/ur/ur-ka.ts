import { Text } from "types";

export const urKa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaKaRules } = await import("data/ipa/ipa-ka.rules");

  return convertText(text, ipaKaRules, { source: urIpa });
};
