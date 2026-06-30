import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const frEt = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { frIpaRules } = await import("constants/fr-ipa.rules");
  const { ipaEtRules } = await import("constants/ipa-et.rules");

  const transliterator = RBT.fromRules(frIpaRules + ipaEtRules);

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
