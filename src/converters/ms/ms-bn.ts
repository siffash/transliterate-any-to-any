import { Text } from "types";

export const msBn = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { msIpaRules } = await import("constants/ms-ipa.rules");
  const { ipaBnRules } = await import("constants/ipa-bn.rules");

  const transliterator = RBT.fromRules(msIpaRules + ipaBnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
