import { Text } from "types";

export const lbHi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { lbIpaRules } = await import("data/lb/lb-ipa.rules");
  const { ipaHiRules } = await import("data/ipa/ipa-hi.rules");

  const transliterator = RBT.fromRules(lbIpaRules + ipaHiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
