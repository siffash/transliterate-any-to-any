import { Text } from "types";

export const mkFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { mkIpaRules } = await import("constants/mk-ipa.rules");
  const { ipaFaRules } = await import("constants/ipa-fa.rules");

  const transliterator = RBT.fromRules(mkIpaRules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
