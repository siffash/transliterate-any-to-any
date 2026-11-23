import { Text } from "types";

export const urSl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemRules } = await import("data/ipa/ipa_gem.rules");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaSlRules } = await import("data/ipa/ipa-sl.rules");

  return convertText(text, ipaGemRules + ipaAspHRules + ipaSlRules + "::Title;", { source: urIpa });
};
