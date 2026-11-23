import { Text } from "types";

export const urJa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");

  return convertText(text, ipaJaRules + "::Title;", { source: urIpa });
};
