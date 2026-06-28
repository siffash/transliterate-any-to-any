import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const ptMk = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { ptIpaRules } = await import("constants/pt-ipa.rules");
  const { ipaMkRules } = await import("constants/ipa-mk.rules");

  const transliterator = RBT.fromRules(ptIpaRules + ipaMkRules);

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
