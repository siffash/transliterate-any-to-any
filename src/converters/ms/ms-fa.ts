import { Text } from "types";

export const msFa = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { msIpaRules } = await import("constants/ms-ipa.rules");
  const { ipaFaRules } = await import("constants/ipa-fa.rules");

  const transliterator = RBT.fromRules(msIpaRules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
