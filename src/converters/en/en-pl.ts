import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const enPl = async (text: Text) => {
  const { toIPA } = require("phonemize");
  const { RBT } = await import("helpers/rbt-distributor");
  const { ipaPlRules } = await import("constants/ipa-pl.rules");

  const transliterator = RBT.fromRules(ipaPlRules);

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
