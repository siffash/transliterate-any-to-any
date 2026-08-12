import { Text } from "types";

export const lbFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { lbIpaRules } = await import("data/lb-ipa.rules");
  const { ipaFaRules } = await import("data/ipa-fa.rules");

  const transliterator = RBT.fromRules(lbIpaRules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
