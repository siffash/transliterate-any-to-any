import { Text } from "types";

export const ltFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ltIpaRules } = await import("constants/lt-ipa.rules");
  const { ipaFaRules } = await import("constants/ipa-fa.rules");

  const transliterator = RBT.fromRules(ltIpaRules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
