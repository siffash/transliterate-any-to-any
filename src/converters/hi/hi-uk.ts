import { Text } from "types";

export const hiUk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemDRules } = await import("data/ipa/ipa_gemd.rules");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaAspXRules } = await import("data/ipa/ipa_aspx.rules");
  const { hiIpaUkRules } = await import("data/hi/hi-ipa_uk.rules");
  const { ipaUkRules } = await import("data/ipa/ipa-uk.rules");

  return convertText(
    text,
    hiIpaRules + ipaGemDRules + ipaAspXRules + hiIpaUkRules + ipaUkRules + "::Title;",
  );
};
