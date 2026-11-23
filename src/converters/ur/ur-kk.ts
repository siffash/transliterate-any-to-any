import { Text } from "types";

export const urKk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemDRules } = await import("data/ipa/ipa_gemd.rules");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaAspXRules } = await import("data/ipa/ipa_aspx.rules");
  const { ipaKkRules } = await import("data/ipa/ipa-kk.rules");

  return convertText(text, ipaGemDRules + ipaAspXRules + ipaKkRules + "::Title;", {
    source: urIpa,
  });
};
