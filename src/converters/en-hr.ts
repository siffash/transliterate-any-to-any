import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const enHr = async (text: Text) => {
  const { toIPA } = require("phonemize");
  const { RBT } = await import("icu-transliterator");
  const { ipaHrRules } = await import("constants/ipa-hr.rules");

  const transliterator = RBT.fromRules(ipaHrRules);

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
