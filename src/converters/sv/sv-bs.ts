import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const svBs = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { svIpaRules } = await import("constants/sv-ipa.rules");
  const { ipaBsRules } = await import("constants/ipa-bs.rules");

  const transliterator = RBT.fromRules(svIpaRules + ipaBsRules);

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
