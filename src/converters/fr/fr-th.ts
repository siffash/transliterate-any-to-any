import { Text } from "types";

export const frTh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { frIpaThRules } = await import("data/fr/fr-ipa_th.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");
  const { ipaThKaranRules } = await import("data/ipa/ipa-th_karan.rules");

  return convertText(text, frIpaThRules + ipaThRules + ipaThKaranRules, {
    source: words => frIpa(words, { keepSchwa: true, velarNasals: true, finalIeu: true }),
  });
};
