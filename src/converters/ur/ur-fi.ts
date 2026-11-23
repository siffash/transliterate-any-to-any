import { Text } from "types";

export const urFi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemTRules } = await import("data/ipa/ipa_gemt.rules");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaFiRules } = await import("data/ipa/ipa-fi.rules");

  return convertText(text, ipaGemTRules + ipaAspHRules + ipaFiRules + "::Title;", {
    source: urIpa,
  });
};
