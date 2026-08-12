import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const enNo = async (text: Text) => {
  const { toIPA } = require("phonemize");
  const { filterIpa } = await import("helpers/filterIpa");
  const { RBT } = await import("helpers/rbt-distributor");
  const { ipaNoRules } = await import("data/ipa-no.rules");

  const transliterator = RBT.fromRules(ipaNoRules);

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
