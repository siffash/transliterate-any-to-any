import { Text } from "types";

export const enHi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { enIpa } = await import("converters/en/en-ipa");
  const { ipaHiRules } = await import("data/ipa-hi.rules");

  const transliterator = RBT.fromRules(ipaHiRules);

  if (typeof text === "string") {
    const ipa = await enIpa<string>(text, true);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await enIpa<string[]>(text, true);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
