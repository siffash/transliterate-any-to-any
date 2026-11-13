import { Text } from "types";

export const enSq = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const { ipaSqRules } = await import("data/ipa/ipa-sq.rules");
  const { enIpaSqRules } = await import("data/en/en-ipa_sq.rules");
  const { enIpaARules } = await import("data/en/en-ipa_a.rules");
  const { copyCase } = await import("helpers/copyCase");

  const transliterator = RBT.fromRules(enIpaSqRules + enIpaARules + ipaSqRules);

  const words = typeof text === "string" ? [text] : text;
  const ipa = await enIpa<string[]>(words);
  const result = ipa.map((ipa, i) => copyCase(words[i], transliterator.transliterate(ipa), "sq"));
  return typeof text === "string" ? result[0] : result;
};
