import { Text } from "types";

export const hiHr = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { hiIpaRules } = await import("constants/hi-ipa.rules");
  const { ipaHrRules } = await import("constants/ipa-hr.rules");

  const transliterator = RBT.fromRules(hiIpaRules + ipaHrRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
