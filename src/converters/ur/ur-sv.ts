import { Text } from "types";

export const urSv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemTRules } = await import("data/ipa/ipa_gemt.rules");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaSvRules } = await import("data/ipa/ipa-sv.rules");

  return convertText(text, ipaGemTRules + ipaAspHRules + ipaSvRules + "::Title;", {
    source: urIpa,
  });
};
