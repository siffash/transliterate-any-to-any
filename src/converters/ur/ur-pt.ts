import { Text } from "types";

export const urPt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemRules } = await import("data/ipa/ipa_gem.rules");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaPtRules } = await import("data/ipa/ipa-pt.rules");

  return convertText(text, ipaGemRules + ipaPtRules + "::Title;", { source: urIpa });
};
