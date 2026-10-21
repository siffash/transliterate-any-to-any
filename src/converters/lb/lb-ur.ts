import { Text } from "types";

export const lbUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { lbIpa } = await import("converters/lb/lb-ipa");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");

  const transliterator = RBT.fromRules(ipaUrRules);

  if (typeof text === "string") {
    const ipa = await lbIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await lbIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
