import { Text } from "types";

export const mkAr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { mkIpaRules } = await import("constants/mk-ipa.rules");
  const { ipaArRules } = await import("constants/ipa-ar.rules");

  const transliterator = RBT.fromRules(mkIpaRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
