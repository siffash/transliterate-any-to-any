import { Text } from "types";

export const hiSk = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { hiIpaRules } = await import("constants/hi-ipa.rules");
  const { ipaSkRules } = await import("constants/ipa-sk.rules");

  const transliterator = RBT.fromRules(hiIpaRules + ipaSkRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
