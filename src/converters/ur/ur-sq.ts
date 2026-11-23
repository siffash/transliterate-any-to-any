import { Text } from "types";

export const urSq = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaSqRules } = await import("data/ipa/ipa-sq.rules");

  return convertText(text, ipaAspHRules + ipaSqRules + "::Title;", { source: urIpa });
};
