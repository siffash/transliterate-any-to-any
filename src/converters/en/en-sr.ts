import { Text } from "types";

export const enSr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { enIpa } = await import("converters/en/en-ipa");
  const { cyrlRestoreRules } = await import("helpers/normalizeEnIpa");
  const { enIpaCyrlRules } = await import("data/en/en-ipa_cyrl.rules");
  const { enIpaOcvRules } = await import("data/en/en-ipa_ocv.rules");
  const { enIpaTsRules } = await import("data/en/en-ipa_ts.rules");
  const { ipaSrRules } = await import("data/ipa/ipa-sr.rules");
  const { enIpaSrRules } = await import("data/en/en-ipa_sr.rules");

  return convertText(
    text,
    enIpaOcvRules + enIpaCyrlRules + enIpaTsRules + enIpaSrRules + ipaSrRules,
    { source: words => enIpa(words, cyrlRestoreRules), caseLang: "sr" },
  );
};
