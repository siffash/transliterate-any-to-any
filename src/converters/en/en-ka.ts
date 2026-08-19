import { Text } from "types";

export const enKa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { enIpa } = await import("converters/en/en-ipa");
  const { ipaKaRules } = await import("data/ipa/ipa-ka.rules");

  const transliterator = RBT.fromRules(ipaKaRules);

  if (typeof text === "string") {
    const ipa = await enIpa<string>(text, true);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await enIpa<string[]>(text, true);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
