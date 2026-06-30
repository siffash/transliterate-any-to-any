import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const svNo = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { svIpaRules } = await import("constants/sv-ipa.rules");
  const { ipaNoRules } = await import("constants/ipa-no.rules");

  const transliterator = RBT.fromRules(svIpaRules + ipaNoRules);

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
