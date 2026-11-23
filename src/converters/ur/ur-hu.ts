import { Text } from "types";

export const urHu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemHuRules } = await import("data/ipa/ipa_gemhu.rules");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaHuRules } = await import("data/ipa/ipa-hu.rules");

  return convertText(text, ipaGemHuRules + ipaAspHRules + ipaHuRules + "::Title;", {
    source: urIpa,
  });
};
