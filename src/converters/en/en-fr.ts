import { Text } from "types";

export const enFr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const { enIpaAeRules } = await import("data/en/en-ipa_ae.rules");
  const { enIpaFrRules } = await import("data/en/en-ipa_fr.rules");
  const { ipaFrRules } = await import("data/ipa/ipa-fr.rules");
  const { copyCase } = await import("helpers/copyCase");

  const transliterator = RBT.fromRules(enIpaAeRules + enIpaFrRules + ipaFrRules);

  const words = typeof text === "string" ? [text] : text;
  const ipa = await enIpa<string[]>(words);
  const result = ipa.map((ipa, i) => copyCase(words[i], transliterator.transliterate(ipa), "fr"));
  return typeof text === "string" ? result[0] : result;
};
