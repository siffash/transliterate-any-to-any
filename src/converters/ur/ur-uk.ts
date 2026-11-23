import { Text } from "types";

export const urUk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemDRules } = await import("data/ipa/ipa_gemd.rules");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaAspXRules } = await import("data/ipa/ipa_aspx.rules");
  const { urIpaUkRules } = await import("data/ur/ur-ipa_uk.rules");
  const { ipaUkRules } = await import("data/ipa/ipa-uk.rules");

  return convertText(text, ipaGemDRules + ipaAspXRules + urIpaUkRules + ipaUkRules + "::Title;", {
    source: urIpa,
  });
};
