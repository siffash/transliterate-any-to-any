import { Text } from "types";

export const enRo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const { ipaRoRules } = await import("data/ipa/ipa-ro.rules");
  const { copyCase } = await import("helpers/copyCase");

  const transliterator = RBT.fromRules(ipaRoRules);

  const words = typeof text === "string" ? [text] : text;
  const ipa = await enIpa<string[]>(words);
  const result = ipa.map((ipa, i) => copyCase(words[i], transliterator.transliterate(ipa), "ro"));
  return typeof text === "string" ? result[0] : result;
};
