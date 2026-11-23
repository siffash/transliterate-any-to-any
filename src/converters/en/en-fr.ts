import { Text } from "types";

export const enFr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { enIpa } = await import("converters/en/en-ipa");
  const { enIpaAeRules } = await import("data/en/en-ipa_ae.rules");
  const { enIpaFrRules } = await import("data/en/en-ipa_fr.rules");
  const { ipaFrRules } = await import("data/ipa/ipa-fr.rules");

  return convertText(text, enIpaAeRules + enIpaFrRules + ipaFrRules, {
    source: enIpa,
    caseLang: "fr",
  });
};
