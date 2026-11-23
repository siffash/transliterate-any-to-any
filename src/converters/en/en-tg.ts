import { Text } from "types";

export const enTg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { enIpa } = await import("converters/en/en-ipa");
  const { cyrlRestoreRules } = await import("helpers/normalizeEnIpa");
  const { enIpaCyrlRules } = await import("data/en/en-ipa_cyrl.rules");
  const { enIpaOcvRules } = await import("data/en/en-ipa_ocv.rules");
  const { enIpaWURules } = await import("data/en/en-ipa_w-u.rules");
  const { enIpaTgRules } = await import("data/en/en-ipa_tg.rules");
  const { ipaTgRules } = await import("data/ipa/ipa-tg.rules");

  return convertText(text, enIpaCyrlRules + enIpaWURules + enIpaTgRules + ipaTgRules, {
    source: words => enIpa(words, cyrlRestoreRules, [], enIpaOcvRules),
    caseLang: "tg",
    elision: true,
  });
};
