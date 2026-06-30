import { Text } from "types";

export const ptKa = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { ptIpaRules } = await import("constants/pt-ipa.rules");
  const { ipaKaRules } = await import("constants/ipa-ka.rules");

  const transliterator = RBT.fromRules(ptIpaRules + ipaKaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
