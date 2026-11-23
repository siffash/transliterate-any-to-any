import { Text } from "types";

export const urId = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaIdRules } = await import("data/ipa/ipa-id.rules");

  return convertText(text, ipaAspHRules + ipaIdRules + "::Title;", { source: urIpa });
};
