import { Text } from "types";

export const mtFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { mtIpaRules } = await import("constants/mt-ipa.rules");
  const { ipaFaRules } = await import("constants/ipa-fa.rules");

  const transliterator = RBT.fromRules(mtIpaRules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
