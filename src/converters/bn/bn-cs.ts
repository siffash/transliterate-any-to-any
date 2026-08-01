import { Text } from "types";

export const bnCs = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { bnIpaRules } = await import("constants/bn-ipa.rules");
  const { ipaCsRules } = await import("constants/ipa-cs.rules");

  const transliterator = RBT.fromRules(bnIpaRules + ipaCsRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
