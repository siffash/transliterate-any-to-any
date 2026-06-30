import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const daHy = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { daIpaRules } = await import("constants/da-ipa.rules");
  const { ipaHyRules } = await import("constants/ipa-hy.rules");

  const transliterator = RBT.fromRules(daIpaRules + ipaHyRules);

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
