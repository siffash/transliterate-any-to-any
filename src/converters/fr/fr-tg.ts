import { Text } from "types";

export const frTg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { frHeIpaRRules } = await import("data/ipa/fr_he-ipa_r.rules");
  const { ipaTgRules } = await import("data/ipa/ipa-tg.rules");

  return convertText(text, frHeIpaRRules + ipaTgRules, {
    source: frIpa,
    caseLang: "tg",
    elision: true,
  });
};
