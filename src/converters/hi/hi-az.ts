import { Text } from "types";

export const hiAz = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { hiIpaRules } = await import("constants/hi-ipa.rules");
  const { ipaAzRules } = await import("constants/ipa-az.rules");

  const transliterator = RBT.fromRules(hiIpaRules + ipaAzRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
