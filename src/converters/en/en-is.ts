import { Text } from "types";

export const enIs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const { enIpaAeRules } = await import("data/en/en-ipa_ae.rules");
  const { ipaIsRules } = await import("data/ipa/ipa-is.rules");
  const { copyCase } = await import("helpers/copyCase");

  const transliterator = RBT.fromRules(enIpaAeRules + ipaIsRules);

  const words = typeof text === "string" ? [text] : text;
  const ipa = await enIpa<string[]>(words);
  const result = ipa.map((ipa, i) => copyCase(words[i], transliterator.transliterate(ipa), "is"));
  return typeof text === "string" ? result[0] : result;
};
