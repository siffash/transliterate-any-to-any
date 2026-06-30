import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const daFi = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { daIpaRules } = await import("constants/da-ipa.rules");
  const { ipaFiRules } = await import("constants/ipa-fi.rules");

  const transliterator = RBT.fromRules(daIpaRules + ipaFiRules);

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
