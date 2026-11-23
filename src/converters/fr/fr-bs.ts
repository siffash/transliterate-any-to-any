import { Text } from "types";

export const frBs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { frIpaNgRules } = await import("data/fr/fr-ipa_ng.rules");
  const { ipaBsRules } = await import("data/ipa/ipa-bs.rules");

  return convertText(text, frIpaNgRules + ipaBsRules, {
    source: frIpa,
    caseLang: "bs",
    elision: true,
  });
};
