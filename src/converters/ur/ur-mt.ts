import { Text } from "types";

export const urMt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaMtGlottalRules } = await import("data/ipa/ipa-mt_glottal.rules");
  const { ipaMtRules } = await import("data/ipa/ipa-mt.rules");

  return convertText(text, ipaAspHRules + ipaMtGlottalRules + ipaMtRules + "::Title;", {
    source: urIpa,
  });
};
