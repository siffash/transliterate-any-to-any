import { Text } from "types";

export const bnRo = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { bnIpaRules } = await import("constants/bn-ipa.rules");
  const { ipaRoRules } = await import("constants/ipa-ro.rules");

  const transliterator = RBT.fromRules(bnIpaRules + ipaRoRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
