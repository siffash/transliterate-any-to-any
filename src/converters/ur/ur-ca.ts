import { Text } from "types";

export const urCa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemRules } = await import("data/ipa/ipa_gem.rules");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaCaRules } = await import("data/ipa/ipa-ca.rules");

  return convertText(text, ipaGemRules + ipaAspHRules + ipaCaRules + "::Title;", { source: urIpa });
};
