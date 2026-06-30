import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const viAz = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { viIpaRules } = await import("constants/vi-ipa.rules");
  const { ipaAzRules } = await import("constants/ipa-az.rules");

  const transliterator = RBT.fromRules(viIpaRules + ipaAzRules);

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
