import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const viDe = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { viIpaRules } = await import("constants/vi-ipa.rules");
  const { ipaDeRules } = await import("constants/ipa-de.rules");

  const transliterator = RBT.fromRules(viIpaRules + ipaDeRules);

  const convert = (text: string) => {
    const transliterated = transliterator.transliterate(text);
    return copyCase(text, transliterated);
  };

  if (typeof text === "string") {
    return convert(text);
  } else {
    return text.map(convert);
  }
};
