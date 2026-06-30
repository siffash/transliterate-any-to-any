import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const frLb = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { frIpaRules } = await import("constants/fr-ipa.rules");
  const { ipaLbRules } = await import("constants/ipa-lb.rules");

  const transliterator = RBT.fromRules(frIpaRules + ipaLbRules);

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
