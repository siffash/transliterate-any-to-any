import { Text } from "types";

export const enMk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { enIpa } = await import("converters/en/en-ipa");
  const { cyrlRestoreRules } = await import("helpers/normalizeEnIpa");
  const { enIpaCyrlRules } = await import("data/en/en-ipa_cyrl.rules");
  const { enIpaOcvRules } = await import("data/en/en-ipa_ocv.rules");
  const { enIpaTsRules } = await import("data/en/en-ipa_ts.rules");
  const { enIpaAeRules } = await import("data/en/en-ipa_ae.rules");
  const { ipaMkRules } = await import("data/ipa/ipa-mk.rules");

  return convertText(text, enIpaCyrlRules + enIpaTsRules + enIpaAeRules + ipaMkRules, {
    source: words => enIpa(words, cyrlRestoreRules, [], enIpaOcvRules),
    caseLang: "mk",
    elision: true,
  });
};
