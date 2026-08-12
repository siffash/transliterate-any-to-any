import { Text } from "types";

export const bsFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bsIpaRules } = await import("constants/bs-ipa.rules");
  const { ipaFaRules } = await import("constants/ipa-fa.rules");

  const transliterator = RBT.fromRules(bsIpaRules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
