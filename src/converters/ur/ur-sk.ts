import { Text } from "types";

export const urSk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemDRules } = await import("data/ipa/ipa_gemd.rules");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaSkRules } = await import("data/ipa/ipa-sk.rules");

  return convertText(text, ipaGemDRules + ipaAspHRules + ipaSkRules + "::Title;", {
    source: urIpa,
  });
};
