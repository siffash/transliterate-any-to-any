import { Text } from "types";

export const urCs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemDRules } = await import("data/ipa/ipa_gemd.rules");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaCsRules } = await import("data/ipa/ipa-cs.rules");

  return convertText(text, ipaGemDRules + ipaAspHRules + ipaCsRules + "::Title;", {
    source: urIpa,
  });
};
