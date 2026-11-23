import { Text } from "types";

export const urBs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemRules } = await import("data/ipa/ipa_gem.rules");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaBsRules } = await import("data/ipa/ipa-bs.rules");

  return convertText(text, ipaGemRules + ipaAspHRules + ipaBsRules + "::Title;", { source: urIpa });
};
