import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const enLv = async (text: Text) => {
  const { toIPA } = require("phonemize");
  const { filterIpa } = await import("helpers/filterIpa");
  const { RBT } = await import("helpers/rbt-distributor");
  const { ipaLvRules } = await import("data/ipa-lv.rules");

  const transliterator = RBT.fromRules(ipaLvRules);

  const convert = (text: string) => {
    const ipa = filterIpa(toIPA(text), text, "en");
    const transliterated = transliterator.transliterate(ipa);
    return copyCase(text, transliterated);
  };

  if (typeof text === "string") {
    return convert(text);
  } else {
    return text.map(convert);
  }
};
