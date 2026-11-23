import { Text } from "types";

export const urLv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaLvRules } = await import("data/ipa/ipa-lv.rules");

  return convertText(text, ipaAspHRules + ipaLvRules + "::Title;", { source: urIpa });
};
