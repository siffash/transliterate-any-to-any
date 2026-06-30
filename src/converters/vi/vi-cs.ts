import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const viCs = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { viIpaRules } = await import("constants/vi-ipa.rules");
  const { ipaCsRules } = await import("constants/ipa-cs.rules");

  const transliterator = RBT.fromRules(viIpaRules + ipaCsRules);

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
