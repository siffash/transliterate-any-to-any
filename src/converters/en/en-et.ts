import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const enEt = async (text: Text) => {
  const { toIPA } = require("phonemize");
  const { RBT } = await import("helpers/rbt-distributor");
  const { ipaEtRules } = await import("data/ipa-et.rules");

  const transliterator = RBT.fromRules(ipaEtRules);

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
