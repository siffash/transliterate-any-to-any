import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const frId = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { frIpaRules } = await import("constants/fr-ipa.rules");
  const { ipaIdRules } = await import("constants/ipa-id.rules");

  const transliterator = RBT.fromRules(frIpaRules + ipaIdRules);

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
