import { Text } from "types";

export const frZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { ipaZhInRules } = await import("data/ipa/ipa-zh_in.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  const transliterator = RBT.fromRules(ipaZhInRules + ipaZhRules);

  if (typeof text === "string") {
    const ipa = await frIpa<string>(text, {
      velarA: true,
      keepSchwa: true,
      velarNasals: true,
      finalIeu: true,
    });
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await frIpa<string[]>(text, {
      velarA: true,
      keepSchwa: true,
      velarNasals: true,
      finalIeu: true,
    });
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
