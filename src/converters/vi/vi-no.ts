import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const viNo = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { viIpaRules } = await import("constants/vi-ipa.rules");
  const { ipaNoRules } = await import("constants/ipa-no.rules");

  const transliterator = RBT.fromRules(viIpaRules + ipaNoRules);

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
