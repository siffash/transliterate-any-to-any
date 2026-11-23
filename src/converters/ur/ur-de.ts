import { Text } from "types";

export const urDe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaDeRules } = await import("data/ipa/ipa-de.rules");

  return convertText(text, ipaAspHRules + ipaDeRules + "::Title;", { source: urIpa });
};
