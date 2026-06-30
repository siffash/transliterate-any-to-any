import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const noIt = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { noIpaRules } = await import("constants/no-ipa.rules");
  const { ipaItRules } = await import("constants/ipa-it.rules");

  const transliterator = RBT.fromRules(noIpaRules + ipaItRules);

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
