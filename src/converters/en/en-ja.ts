import { Text } from "types";

export const enJa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");

  const transliterator = RBT.fromRules(ipaJaRules);

  if (typeof text === "string") {
    const ipa = await enIpa<string>(text, false);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await enIpa<string[]>(text, false);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
