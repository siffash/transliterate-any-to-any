import { Text } from "types";

export const hiRo = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { hiIpaRules } = await import("constants/hi-ipa.rules");
  const { ipaRoRules } = await import("constants/ipa-ro.rules");

  const transliterator = RBT.fromRules(hiIpaRules + ipaRoRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
