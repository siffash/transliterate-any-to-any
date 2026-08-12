import { Text } from "types";

export const itFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { itIpaRules } = await import("constants/it-ipa.rules");
  const { ipaFaRules } = await import("constants/ipa-fa.rules");

  const transliterator = RBT.fromRules(itIpaRules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
