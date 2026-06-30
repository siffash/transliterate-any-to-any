import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const daPl = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { daIpaRules } = await import("constants/da-ipa.rules");
  const { ipaPlRules } = await import("constants/ipa-pl.rules");

  const transliterator = RBT.fromRules(daIpaRules + ipaPlRules);

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
