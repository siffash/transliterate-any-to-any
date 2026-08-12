import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const enAz = async (text: Text) => {
  const { toIPA } = require("phonemize");
  const { RBT } = await import("helpers/rbt-distributor");
  const { ipaAzRules } = await import("constants/ipa-az.rules");

  const transliterator = RBT.fromRules(ipaAzRules);

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
