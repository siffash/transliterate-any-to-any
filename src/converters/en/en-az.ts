import { Text } from "types";

export const enAz = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const { syllabicLRestoreRules, shireRestoreRules } = await import("helpers/normalizeEnIpa");
  const { ipaAzRules } = await import("data/ipa/ipa-az.rules");
  const { ipaThTRules } = await import("data/ipa/ipa_th-t.rules");
  const { enIpaARules } = await import("data/en/en-ipa_a.rules");
  const { copyCase } = await import("helpers/copyCase");

  const transliterator = RBT.fromRules(ipaThTRules + enIpaARules + ipaAzRules);

  const words = typeof text === "string" ? [text] : text;
  const ipa = await enIpa<string[]>(words, [...syllabicLRestoreRules, ...shireRestoreRules]);
  const result = ipa.map((ipa, i) => copyCase(words[i], transliterator.transliterate(ipa), "az"));
  return typeof text === "string" ? result[0] : result;
};
