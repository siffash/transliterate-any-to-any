import { Text } from "types";

export const enLb = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const { ipaLbRules } = await import("data/ipa/ipa-lb.rules");
  const { copyCase } = await import("helpers/copyCase");

  const transliterator = RBT.fromRules(ipaLbRules);

  const words = typeof text === "string" ? [text] : text;
  const ipa = await enIpa<string[]>(words);
  const result = ipa.map((ipa, i) => copyCase(words[i], transliterator.transliterate(ipa), "lb"));
  return typeof text === "string" ? result[0] : result;
};
