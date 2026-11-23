import { Text } from "types";

export const frSk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { frIpaNgRules } = await import("data/fr/fr-ipa_ng.rules");
  const { ipaSkRules } = await import("data/ipa/ipa-sk.rules");

  return convertText(text, frIpaNgRules + ipaSkRules, {
    source: frIpa,
    caseLang: "sk",
    elision: true,
  });
};
