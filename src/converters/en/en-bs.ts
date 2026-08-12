import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const enBs = async (text: Text) => {
  const { toIPA } = require("phonemize");
  const { RBT } = await import("helpers/rbt-distributor");
  const { ipaBsRules } = await import("data/ipa-bs.rules");

  const transliterator = RBT.fromRules(ipaBsRules);

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
