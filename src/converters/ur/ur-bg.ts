import { Text } from "types";

export const urBg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemRules } = await import("data/ipa/ipa_gem.rules");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaBgRules } = await import("data/ipa/ipa-bg.rules");

  return convertText(text, ipaGemRules + ipaAspHRules + ipaBgRules + "::Title;", { source: urIpa });
};
