import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const enPt = async (text: Text) => {
  const { toIPA } = require("phonemize");
  const { RBT } = await import("icu-transliterator");
  const { ipaPtRules } = await import("constants/ipa-pt.rules");

  const transliterator = RBT.fromRules(ipaPtRules);

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
