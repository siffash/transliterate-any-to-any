import { Text } from "types";

export const enMk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const { cyrlRestoreRules } = await import("helpers/normalizeEnIpa");
  const { enIpaCyrlRules } = await import("data/en/en-ipa_cyrl.rules");
  const { enIpaTsRules } = await import("data/en/en-ipa_ts.rules");
  const { enIpaAeRules } = await import("data/en/en-ipa_ae.rules");
  const { ipaMkRules } = await import("data/ipa/ipa-mk.rules");
  const { copyCase } = await import("helpers/copyCase");
  const { keepElision } = await import("helpers/keepElision");

  const transliterator = RBT.fromRules(enIpaCyrlRules + enIpaTsRules + enIpaAeRules + ipaMkRules);

  const words = typeof text === "string" ? [text] : text;
  const ipa = await enIpa<string[]>(words, cyrlRestoreRules);
  const result = ipa.map((ipa, i) => copyCase(words[i], keepElision(ipa, transliterator), "mk"));
  return typeof text === "string" ? result[0] : result;
};
