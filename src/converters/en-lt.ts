import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const enLt = async (text: Text) => {
  const { toIPA } = require("phonemize");
  const { RBT } = await import("icu-transliterator");
  const { ipaLtRules } = await import("constants/ipa-lt.rules");

  const transliterator = RBT.fromRules(ipaLtRules);

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
