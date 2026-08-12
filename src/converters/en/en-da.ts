import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const enDa = async (text: Text) => {
  const { toIPA } = require("phonemize");
  const { RBT } = await import("helpers/rbt-distributor");
  const { ipaDaRules } = await import("constants/ipa-da.rules");

  const transliterator = RBT.fromRules(ipaDaRules);

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
