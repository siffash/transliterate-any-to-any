import { Text } from "types";

export const enKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  const transliterator = RBT.fromRules(ipaKoRules);

  if (typeof text === "string") {
    const ipa = await enIpa<string>(text, false);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await enIpa<string[]>(text, false);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
