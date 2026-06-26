import { Text } from "types";

export const hiMk = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { hiIpaRules } = await import("constants/hi-ipa.rules");
  const { ipaMkRules } = await import("constants/ipa-mk.rules");

  const transliterator = RBT.fromRules(hiIpaRules + ipaMkRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
