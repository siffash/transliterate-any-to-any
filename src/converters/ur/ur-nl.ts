import { Text } from "types";

export const urNl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemRules } = await import("data/ipa/ipa_gem.rules");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaNlRules } = await import("data/ipa/ipa-nl.rules");

  return convertText(text, ipaGemRules + ipaAspHRules + ipaNlRules + "::Title;", { source: urIpa });
};
