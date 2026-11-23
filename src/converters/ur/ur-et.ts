import { Text } from "types";

export const urEt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemTRules } = await import("data/ipa/ipa_gemt.rules");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaEtRules } = await import("data/ipa/ipa-et.rules");

  return convertText(text, ipaGemTRules + ipaAspHRules + ipaEtRules + "::Title;", {
    source: urIpa,
  });
};
