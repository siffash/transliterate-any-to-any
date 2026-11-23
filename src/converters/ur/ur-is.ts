import { Text } from "types";

export const urIs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemTRules } = await import("data/ipa/ipa_gemt.rules");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaIsRules } = await import("data/ipa/ipa-is.rules");

  return convertText(text, ipaGemTRules + ipaIsRules + "::Title;", { source: urIpa });
};
