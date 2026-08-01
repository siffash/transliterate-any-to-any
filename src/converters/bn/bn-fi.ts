import { Text } from "types";

export const bnFi = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { bnIpaRules } = await import("constants/bn-ipa.rules");
  const { ipaFiRules } = await import("constants/ipa-fi.rules");

  const transliterator = RBT.fromRules(bnIpaRules + ipaFiRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
