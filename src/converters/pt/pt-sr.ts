import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const ptSr = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { ptIpaRules } = await import("constants/pt-ipa.rules");
  const { ipaSrRules } = await import("constants/ipa-sr.rules");

  const transliterator = RBT.fromRules(ptIpaRules + ipaSrRules);

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
