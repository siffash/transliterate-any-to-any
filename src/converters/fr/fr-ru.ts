import { Text } from "types";

export const frRu = async (
  text: Text,
  { spelledEy = false, finalIeu = true }: { spelledEy?: boolean; finalIeu?: boolean } = {},
) => {
  const { convertText } = await import("helpers/convertText");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { frIpaCyrlRules } = await import("data/fr/fr-ipa_cyrl.rules");
  const { frIpaRuRules } = await import("data/fr/fr-ipa_ru.rules");
  const { ipaRuRules } = await import("data/ipa/ipa-ru.rules");
  const { ruLRules } = await import("data/ru/ru_l.rules");
  const { frCyrlRlRules } = await import("data/fr/fr-cyrl_rl.rules");

  return convertText(text, frIpaCyrlRules + frIpaRuRules + ipaRuRules + ruLRules + frCyrlRlRules, {
    source: words => frIpa(words, { finalIeu, spelledEy, doubleConsonants: "medial" }),
    caseLang: "ru",
    elision: true,
  });
};
