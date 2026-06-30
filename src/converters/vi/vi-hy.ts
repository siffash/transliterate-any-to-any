import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const viHy = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { viIpaRules } = await import("constants/vi-ipa.rules");
  const { ipaHyRules } = await import("constants/ipa-hy.rules");

  const transliterator = RBT.fromRules(viIpaRules + ipaHyRules);

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
