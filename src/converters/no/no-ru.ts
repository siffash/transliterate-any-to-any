import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const noRu = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { noIpaRules } = await import("constants/no-ipa.rules");
  const { ipaRuRules } = await import("constants/ipa-ru.rules");

  const transliterator = RBT.fromRules(noIpaRules + ipaRuRules);

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
