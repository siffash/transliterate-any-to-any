import { Text } from "types";

export const hiKk = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { hiIpaRules } = await import("constants/hi-ipa.rules");
  const { ipaKkRules } = await import("constants/ipa-kk.rules");

  const transliterator = RBT.fromRules(hiIpaRules + ipaKkRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
