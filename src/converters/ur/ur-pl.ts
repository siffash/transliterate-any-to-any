import { Text } from "types";

export const urPl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaPlRules } = await import("data/ipa/ipa-pl.rules");

  return convertText(text, ipaAspHRules + ipaPlRules + "::Title;", { source: urIpa });
};
