import { Text } from "types";

export const urHr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaHrRules } = await import("data/ipa/ipa-hr.rules");

  return convertText(text, ipaAspHRules + ipaHrRules + "::Title;", { source: urIpa });
};
