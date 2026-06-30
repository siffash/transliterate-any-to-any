import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const daEl = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { daIpaRules } = await import("constants/da-ipa.rules");
  const { ipaElRules } = await import("constants/ipa-el.rules");

  const transliterator = RBT.fromRules(daIpaRules + ipaElRules);

  const convert = (text: string) => {
    const transliterated = transliterator.transliterate(text);
    return copyCase(text, transliterated);
  };

  if (typeof text === "string") {
    return convert(text);
  } else {
    return text.map(convert);
  }
};
