import { Text } from "types";

export const msAr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { msIpaRules } = await import("constants/ms-ipa.rules");
  const { ipaArRules } = await import("constants/ipa-ar.rules");

  const transliterator = RBT.fromRules(msIpaRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
