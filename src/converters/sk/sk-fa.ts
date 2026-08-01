import { Text } from "types";

export const skFa = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { skIpaRules } = await import("constants/sk-ipa.rules");
  const { ipaFaRules } = await import("constants/ipa-fa.rules");

  const transliterator = RBT.fromRules(skIpaRules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
