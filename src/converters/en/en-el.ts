import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const enEl = async (text: Text) => {
  const { toIPA } = require("phonemize");
  const { RBT } = await import("icu-transliterator");
  const { ipaElRules } = await import("constants/ipa-el.rules");

  const transliterator = RBT.fromRules(ipaElRules);

  const convert = (text: string) => {
    const ipa = toIPA(text);
    const transliterated = transliterator.transliterate(ipa);
    return copyCase(text, transliterated);
  };

  if (typeof text === "string") {
    return convert(text);
  } else {
    return text.map(convert);
  }
};
