import { Text } from "types";

export const urRu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemDRules } = await import("data/ipa/ipa_gemd.rules");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaRuRules } = await import("data/ipa/ipa-ru.rules");

  return convertText(text, ipaGemDRules + ipaAspHRules + ipaRuRules + "::Title;", {
    source: urIpa,
  });
};
