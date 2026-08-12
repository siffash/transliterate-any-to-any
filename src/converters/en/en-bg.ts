import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const enBg = async (text: Text) => {
  const { toIPA } = require("phonemize");
  const { RBT } = await import("helpers/rbt-distributor");
  const { ipaBgRules } = await import("data/ipa-bg.rules");

  const transliterator = RBT.fromRules(ipaBgRules);

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
