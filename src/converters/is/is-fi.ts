import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const isFi = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { isIpaRules } = await import("constants/is-ipa.rules");
  const { ipaFiRules } = await import("constants/ipa-fi.rules");

  const transliterator = RBT.fromRules(isIpaRules + ipaFiRules);

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
