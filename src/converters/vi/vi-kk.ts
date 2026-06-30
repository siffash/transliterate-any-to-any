import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const viKk = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { viIpaRules } = await import("constants/vi-ipa.rules");
  const { ipaKkRules } = await import("constants/ipa-kk.rules");

  const transliterator = RBT.fromRules(viIpaRules + ipaKkRules);

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
