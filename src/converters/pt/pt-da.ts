import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const ptDa = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { ptIpaRules } = await import("constants/pt-ipa.rules");
  const { ipaDaRules } = await import("constants/ipa-da.rules");

  const transliterator = RBT.fromRules(ptIpaRules + ipaDaRules);

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
