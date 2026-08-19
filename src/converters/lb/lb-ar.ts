import { Text } from "types";

export const lbAr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { lbIpaRules } = await import("data/lb/lb-ipa.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");

  const transliterator = RBT.fromRules(lbIpaRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
