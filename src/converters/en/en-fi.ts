import { Text } from "types";

export const enFi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const { ipaFiRules } = await import("data/ipa/ipa-fi.rules");
  const { copyCase } = await import("helpers/copyCase");

  const transliterator = RBT.fromRules(ipaFiRules);

  if (typeof text === "string") {
    const ipa = await enIpa<string>(text);
    return copyCase(text, transliterator.transliterate(ipa), "fi");
  } else {
    const ipaArray = await enIpa<string[]>(text);
    return ipaArray.map((ipa, i) => copyCase(text[i], transliterator.transliterate(ipa), "fi"));
  }
};
