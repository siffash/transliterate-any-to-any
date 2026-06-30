import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const frHy = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { frIpaRules } = await import("constants/fr-ipa.rules");
  const { ipaHyRules } = await import("constants/ipa-hy.rules");

  const transliterator = RBT.fromRules(frIpaRules + ipaHyRules);

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
