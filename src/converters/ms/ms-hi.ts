import { Text } from "types";

export const msHi = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { msIpaRules } = await import("constants/ms-ipa.rules");
  const { ipaHiRules } = await import("constants/ipa-hi.rules");

  const transliterator = RBT.fromRules(msIpaRules + ipaHiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
