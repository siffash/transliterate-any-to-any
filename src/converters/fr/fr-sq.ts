import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const frSq = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { frIpaRules } = await import("constants/fr-ipa.rules");
  const { ipaSqRules } = await import("constants/ipa-sq.rules");

  const transliterator = RBT.fromRules(frIpaRules + ipaSqRules);

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
