import { Text } from "types";

export const urSr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaSrRules } = await import("data/ipa/ipa-sr.rules");

  return convertText(text, ipaAspHRules + ipaSrRules + "::Title;", { source: urIpa });
};
