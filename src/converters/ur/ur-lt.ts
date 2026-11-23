import { Text } from "types";

export const urLt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemRules } = await import("data/ipa/ipa_gem.rules");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaLtRules } = await import("data/ipa/ipa-lt.rules");

  return convertText(text, ipaGemRules + ipaAspHRules + ipaLtRules + "::Title;", { source: urIpa });
};
