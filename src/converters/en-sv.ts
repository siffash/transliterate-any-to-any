import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const enSv = async (text: Text) => {
  const { toIPA } = require("phonemize");
  const { RBT } = await import("icu-transliterator");
  const { ipaSvRules } = await import("constants/ipa-sv.rules");

  const transliterator = RBT.fromRules(ipaSvRules);

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
