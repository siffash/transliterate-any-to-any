import { Text } from "types";

export const urMs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemRules } = await import("data/ipa/ipa_gem.rules");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaMsRules } = await import("data/ipa/ipa-ms.rules");

  return convertText(text, ipaGemRules + ipaAspHRules + ipaMsRules + "::Title;", { source: urIpa });
};
