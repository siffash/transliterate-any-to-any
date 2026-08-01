import { Text } from "types";

export const bnRu = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { bnIpaRules } = await import("constants/bn-ipa.rules");
  const { ipaRuRules } = await import("constants/ipa-ru.rules");

  const transliterator = RBT.fromRules(bnIpaRules + ipaRuRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
