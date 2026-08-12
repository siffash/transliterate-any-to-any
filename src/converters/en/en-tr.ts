import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const enTr = async (text: Text) => {
  const { toIPA } = require("phonemize");
  const { RBT } = await import("helpers/rbt-distributor");
  const { ipaTrRules } = await import("data/ipa-tr.rules");

  const transliterator = RBT.fromRules(ipaTrRules);

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
