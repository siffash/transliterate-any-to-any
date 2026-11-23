import { Text } from "types";

export const urLb = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemRules } = await import("data/ipa/ipa_gem.rules");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaLbRules } = await import("data/ipa/ipa-lb.rules");

  return convertText(text, ipaGemRules + ipaAspHRules + ipaLbRules + "::Title;", { source: urIpa });
};
