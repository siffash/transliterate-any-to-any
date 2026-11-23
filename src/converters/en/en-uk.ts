import { Text } from "types";

export const enUk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { enIpa } = await import("converters/en/en-ipa");
  const { cyrlRestoreRules } = await import("helpers/normalizeEnIpa");
  const { enIpaCyrlRules } = await import("data/en/en-ipa_cyrl.rules");
  const { enIpaOcvRules } = await import("data/en/en-ipa_ocv.rules");
  const { enIpaTsRules } = await import("data/en/en-ipa_ts.rules");
  const { enIpaUkRules } = await import("data/en/en-ipa_uk.rules");
  const { enIpaAeRules } = await import("data/en/en-ipa_ae.rules");
  const { ipaUkRules } = await import("data/ipa/ipa-uk.rules");

  return convertText(
    text,
    enIpaCyrlRules + enIpaTsRules + enIpaUkRules + enIpaAeRules + ipaUkRules,
    {
      source: words => enIpa(words, cyrlRestoreRules, [], enIpaOcvRules),
      caseLang: "uk",
      elision: "'",
    },
  );
};
