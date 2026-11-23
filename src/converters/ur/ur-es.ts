import { Text } from "types";

export const urEs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemRules } = await import("data/ipa/ipa_gem.rules");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaEsRules } = await import("data/ipa/ipa-es.rules");

  return convertText(text, ipaGemRules + ipaEsRules + "::Title;", { source: urIpa });
};
