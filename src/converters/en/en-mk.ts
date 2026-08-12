import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const enMk = async (text: Text) => {
  const { toIPA } = require("phonemize");
  const { filterIpa } = await import("helpers/filterIpa");
  const { RBT } = await import("helpers/rbt-distributor");
  const { ipaMkRules } = await import("data/ipa-mk.rules");

  const transliterator = RBT.fromRules(ipaMkRules);

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
