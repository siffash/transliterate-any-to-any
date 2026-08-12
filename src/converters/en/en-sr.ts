import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const enSr = async (text: Text) => {
  const { toIPA } = require("phonemize");
  const { RBT } = await import("helpers/rbt-distributor");
  const { ipaSrRules } = await import("constants/ipa-sr.rules");

  const transliterator = RBT.fromRules(ipaSrRules);

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
