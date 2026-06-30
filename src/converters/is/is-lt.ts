import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const isLt = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { isIpaRules } = await import("constants/is-ipa.rules");
  const { ipaLtRules } = await import("constants/ipa-lt.rules");

  const transliterator = RBT.fromRules(isIpaRules + ipaLtRules);

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
