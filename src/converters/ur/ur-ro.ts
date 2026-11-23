import { Text } from "types";

export const urRo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemRules } = await import("data/ipa/ipa_gem.rules");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaRoRules } = await import("data/ipa/ipa-ro.rules");

  return convertText(text, ipaGemRules + ipaAspHRules + ipaRoRules + "::Title;", { source: urIpa });
};
