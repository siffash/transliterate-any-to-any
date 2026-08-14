import { Text } from "types";

export const enFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { enIpa } = await import("converters/en/en-ipa");
  const { ipaFaRules } = await import("data/ipa-fa.rules");

  const transliterator = RBT.fromRules(ipaFaRules);

  if (typeof text === "string") {
    const ipa = await enIpa<string>(text, false);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await enIpa<string[]>(text, false);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
