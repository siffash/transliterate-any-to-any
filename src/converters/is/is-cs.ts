import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const isCs = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { isIpaRules } = await import("constants/is-ipa.rules");
  const { ipaCsRules } = await import("constants/ipa-cs.rules");

  const transliterator = RBT.fromRules(isIpaRules + ipaCsRules);

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
