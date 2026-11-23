import { Text } from "types";

export const urKo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemRules } = await import("data/ipa/ipa_gem.rules");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  return convertText(text, ipaGemRules + ipaKoRules + "::Title;", { source: urIpa });
};
