import { Text } from "types";

export const isFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { isIpaRules } = await import("data/is/is-ipa.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");

  const transliterator = RBT.fromRules(isIpaRules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
