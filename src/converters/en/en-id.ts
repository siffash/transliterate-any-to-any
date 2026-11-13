import { Text } from "types";

export const enId = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const { ipaIdRules } = await import("data/ipa/ipa-id.rules");
  const { copyCase } = await import("helpers/copyCase");

  const transliterator = RBT.fromRules(ipaIdRules);

  const words = typeof text === "string" ? [text] : text;
  const ipa = await enIpa<string[]>(words);
  const result = ipa.map((ipa, i) => copyCase(words[i], transliterator.transliterate(ipa), "id"));
  return typeof text === "string" ? result[0] : result;
};
