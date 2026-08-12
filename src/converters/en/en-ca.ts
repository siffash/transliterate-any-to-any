import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const enCa = async (text: Text) => {
  const { toIPA } = require("phonemize");
  const { filterIpa } = await import("helpers/filterIpa");
  const { RBT } = await import("helpers/rbt-distributor");
  const { ipaCaRules } = await import("data/ipa-ca.rules");

  const transliterator = RBT.fromRules(ipaCaRules);

  const convert = (text: string) => {
    const ipa = filterIpa(toIPA(text));
    const transliterated = transliterator.transliterate(ipa);
    return copyCase(text, transliterated);
  };

  if (typeof text === "string") {
    return convert(text);
  } else {
    return text.map(convert);
  }
};
