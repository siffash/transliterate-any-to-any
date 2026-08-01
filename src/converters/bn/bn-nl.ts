import { Text } from "types";

export const bnNl = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { bnIpaRules } = await import("constants/bn-ipa.rules");
  const { ipaNlRules } = await import("constants/ipa-nl.rules");

  const transliterator = RBT.fromRules(bnIpaRules + ipaNlRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
