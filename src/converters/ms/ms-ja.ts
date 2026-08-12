import { Text } from "types";

export const msJa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { msIpaRules } = await import("constants/ms-ipa.rules");
  const { ipaJaRules } = await import("constants/ipa-ja.rules");

  const transliterator = RBT.fromRules(msIpaRules + ipaJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
