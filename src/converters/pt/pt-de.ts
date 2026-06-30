import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const ptDe = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { ptIpaRules } = await import("constants/pt-ipa.rules");
  const { ipaDeRules } = await import("constants/ipa-de.rules");

  const transliterator = RBT.fromRules(ptIpaRules + ipaDeRules);

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
