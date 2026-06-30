import { Text } from "types";

export const hiLt = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { hiIpaRules } = await import("constants/hi-ipa.rules");
  const { ipaLtRules } = await import("constants/ipa-lt.rules");

  const transliterator = RBT.fromRules(hiIpaRules + ipaLtRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
