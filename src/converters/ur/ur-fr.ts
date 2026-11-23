import { Text } from "types";

export const urFr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemRules } = await import("data/ipa/ipa_gem.rules");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaFrRules } = await import("data/ipa/ipa-fr.rules");

  return convertText(text, ipaGemRules + ipaAspHRules + ipaFrRules + "::Title;", { source: urIpa });
};
