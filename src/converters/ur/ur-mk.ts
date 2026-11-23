import { Text } from "types";

export const urMk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaMkRules } = await import("data/ipa/ipa-mk.rules");

  return convertText(text, ipaAspHRules + ipaMkRules + "::Title;", { source: urIpa });
};
