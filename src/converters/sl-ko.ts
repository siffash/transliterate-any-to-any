import { Text } from "types";

export const slKo = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { slIpaRules } = await import("constants/sl-ipa.rules");
  const { ipaKoRules } = await import("constants/ipa-ko.rules");

  const transliterator = RBT.fromRules(slIpaRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
