import { Text } from "types";

export const urTg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { arFaUrIpaTgRules } = await import("data/ipa/ar_fa_ur-ipa_tg.rules");
  const { ipaTgRules } = await import("data/ipa/ipa-tg.rules");

  return convertText(text, ipaAspHRules + arFaUrIpaTgRules + ipaTgRules + "::Title;", {
    source: urIpa,
  });
};
