import { Text } from "types";

export const enFi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const { ipaFiRules } = await import("data/ipa/ipa-fi.rules");
  const { copyCase } = await import("helpers/copyCase");

  const transliterator = RBT.fromRules(ipaFiRules);

  const words = typeof text === "string" ? [text] : text;
  const ipa = await enIpa<string[]>(words);
  const result = ipa.map((ipa, i) => copyCase(words[i], transliterator.transliterate(ipa), "fi"));
  return typeof text === "string" ? result[0] : result;
};
