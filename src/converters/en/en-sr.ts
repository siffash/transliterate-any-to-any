import { Text } from "types";

export const enSr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const { cyrlRestoreRules } = await import("helpers/normalizeEnIpa");
  const { enIpaCyrlRules } = await import("data/en/en-ipa_cyrl.rules");
  const { enIpaTsRules } = await import("data/en/en-ipa_ts.rules");
  const { ipaSrRules } = await import("data/ipa/ipa-sr.rules");
  const { enIpaSrRules } = await import("data/en/en-ipa_sr.rules");
  const { copyCase } = await import("helpers/copyCase");

  const transliterator = RBT.fromRules(enIpaCyrlRules + enIpaTsRules + enIpaSrRules + ipaSrRules);

  const words = typeof text === "string" ? [text] : text;
  const ipa = await enIpa<string[]>(words, cyrlRestoreRules);
  const result = ipa.map((ipa, i) => copyCase(words[i], transliterator.transliterate(ipa), "sr"));
  return typeof text === "string" ? result[0] : result;
};
