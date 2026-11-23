import { Text } from "types";

export const urIt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaItRules } = await import("data/ipa/ipa-it.rules");

  return convertText(text, ipaAspHRules + ipaItRules + "::Title;", { source: urIpa });
};
