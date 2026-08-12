import { Text } from "types";

export const mkHi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { mkIpaRules } = await import("constants/mk-ipa.rules");
  const { ipaHiRules } = await import("constants/ipa-hi.rules");

  const transliterator = RBT.fromRules(mkIpaRules + ipaHiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
