import { Text } from "types";

export const urTr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaTrRules } = await import("data/ipa/ipa-tr.rules");
  const { ipaDottedIRules } = await import("data/ipa/ipa_dotted-i.rules");

  return convertText(text, ipaAspHRules + ipaTrRules + ipaDottedIRules + "::Title;", {
    source: urIpa,
  });
};
