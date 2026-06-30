import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const noDa = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { noIpaRules } = await import("constants/no-ipa.rules");
  const { ipaDaRules } = await import("constants/ipa-da.rules");

  const transliterator = RBT.fromRules(noIpaRules + ipaDaRules);

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
