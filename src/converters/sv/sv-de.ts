import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const svDe = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { svIpaRules } = await import("constants/sv-ipa.rules");
  const { ipaDeRules } = await import("constants/ipa-de.rules");

  const transliterator = RBT.fromRules(svIpaRules + ipaDeRules);

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
