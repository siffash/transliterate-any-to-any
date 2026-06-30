import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const daIs = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { daIpaRules } = await import("constants/da-ipa.rules");
  const { ipaIsRules } = await import("constants/ipa-is.rules");

  const transliterator = RBT.fromRules(daIpaRules + ipaIsRules);

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
