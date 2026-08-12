import { Text } from "types";

export const trFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { trIpaRules } = await import("constants/tr-ipa.rules");
  const { ipaFaRules } = await import("constants/ipa-fa.rules");

  const transliterator = RBT.fromRules(trIpaRules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
