import { Text } from "types";

export const urNo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemTRules } = await import("data/ipa/ipa_gemt.rules");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { urIpaNoRules } = await import("data/ur/ur-ipa_no.rules");
  const { ipaNoRules } = await import("data/ipa/ipa-no.rules");

  return convertText(text, ipaGemTRules + ipaAspHRules + urIpaNoRules + ipaNoRules + "::Title;", {
    source: urIpa,
  });
};
