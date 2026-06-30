import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const noIs = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { noIpaRules } = await import("constants/no-ipa.rules");
  const { ipaIsRules } = await import("constants/ipa-is.rules");

  const transliterator = RBT.fromRules(noIpaRules + ipaIsRules);

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
