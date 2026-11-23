import { Text } from "types";

export const enRu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { enIpa } = await import("converters/en/en-ipa");
  const { cyrlRestoreRules, erRestoreRules } = await import("helpers/normalizeEnIpa");
  const { enIpaCyrlRules } = await import("data/en/en-ipa_cyrl.rules");
  const { enIpaOcvRules } = await import("data/en/en-ipa_ocv.rules");
  const { enIpaWURules } = await import("data/en/en-ipa_w-u.rules");
  const { enIpaAeRules } = await import("data/en/en-ipa_ae.rules");
  const { enIpaRuRules } = await import("data/en/en-ipa_ru.rules");
  const { ipaRuRules } = await import("data/ipa/ipa-ru.rules");

  return convertText(
    text,
    enIpaCyrlRules + enIpaWURules + enIpaAeRules + enIpaRuRules + ipaRuRules,
    {
      source: words => enIpa(words, cyrlRestoreRules, erRestoreRules, enIpaOcvRules),
      caseLang: "ru",
      elision: true,
    },
  );
};
