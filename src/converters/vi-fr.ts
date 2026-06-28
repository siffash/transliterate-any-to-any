import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const viFr = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { viIpaRules } = await import("constants/vi-ipa.rules");
  const { ipaFrRules } = await import("constants/ipa-fr.rules");

  const transliterator = RBT.fromRules(viIpaRules + ipaFrRules);

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
