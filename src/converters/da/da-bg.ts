import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const daBg = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { daIpaRules } = await import("constants/da-ipa.rules");
  const { ipaBgRules } = await import("constants/ipa-bg.rules");

  const transliterator = RBT.fromRules(daIpaRules + ipaBgRules);

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
