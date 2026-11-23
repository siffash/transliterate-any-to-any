import { Text } from "types";

export const urEl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemRules } = await import("data/ipa/ipa_gem.rules");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { urIpaElRules } = await import("data/ur/ur-ipa_el.rules");
  const { ipaElRules } = await import("data/ipa/ipa-el.rules");

  return convertText(text, ipaGemRules + urIpaElRules + ipaElRules + "::Title;", { source: urIpa });
};
