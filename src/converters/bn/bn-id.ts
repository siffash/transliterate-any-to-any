import { Text } from "types";

export const bnId = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { bnIpaRules } = await import("constants/bn-ipa.rules");
  const { ipaIdRules } = await import("constants/ipa-id.rules");

  const transliterator = RBT.fromRules(bnIpaRules + ipaIdRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
