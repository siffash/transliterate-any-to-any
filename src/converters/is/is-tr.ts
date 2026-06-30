import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const isTr = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { isIpaRules } = await import("constants/is-ipa.rules");
  const { ipaTrRules } = await import("constants/ipa-tr.rules");

  const transliterator = RBT.fromRules(isIpaRules + ipaTrRules);

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
