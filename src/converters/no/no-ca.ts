import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const noCa = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { noIpaRules } = await import("constants/no-ipa.rules");
  const { ipaCaRules } = await import("constants/ipa-ca.rules");

  const transliterator = RBT.fromRules(noIpaRules + ipaCaRules);

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
