import { Text } from "types";

export const nlFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { nlIpaRules } = await import("constants/nl-ipa.rules");
  const { ipaFaRules } = await import("constants/ipa-fa.rules");

  const transliterator = RBT.fromRules(nlIpaRules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
