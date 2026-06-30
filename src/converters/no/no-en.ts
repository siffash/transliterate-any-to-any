import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const noEn = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { noIpaRules } = await import("constants/no-ipa.rules");
  const { ipaEnRules } = await import("constants/ipa-en.rules");

  const transliterator = RBT.fromRules(noIpaRules + ipaEnRules);

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
