import { Text } from "types";

export const enTg = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const { cyrlRestoreRules } = await import("helpers/normalizeEnIpa");
  const { enIpaCyrlRules } = await import("data/en/en-ipa_cyrl.rules");
  const { enIpaWURules } = await import("data/en/en-ipa_w-u.rules");
  const { enIpaTgRules } = await import("data/en/en-ipa_tg.rules");
  const { ipaTgRules } = await import("data/ipa/ipa-tg.rules");
  const { copyCase } = await import("helpers/copyCase");
  const { keepElision } = await import("helpers/keepElision");

  const transliterator = RBT.fromRules(enIpaCyrlRules + enIpaWURules + enIpaTgRules + ipaTgRules);

  const words = typeof text === "string" ? [text] : text;
  const ipa = await enIpa<string[]>(words, cyrlRestoreRules);
  const result = ipa.map((ipa, i) => copyCase(words[i], keepElision(ipa, transliterator), "tg"));
  return typeof text === "string" ? result[0] : result;
};
