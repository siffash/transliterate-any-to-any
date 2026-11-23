import { Text } from "types";

export const urDa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemTRules } = await import("data/ipa/ipa_gemt.rules");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaDaRules } = await import("data/ipa/ipa-da.rules");

  return convertText(text, ipaGemTRules + ipaAspHRules + ipaDaRules + "::Title;", {
    source: urIpa,
  });
};
