import { Text } from "types";

export const hiSl = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { hiIpaRules } = await import("constants/hi-ipa.rules");
  const { ipaSlRules } = await import("constants/ipa-sl.rules");

  const transliterator = RBT.fromRules(hiIpaRules + ipaSlRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
