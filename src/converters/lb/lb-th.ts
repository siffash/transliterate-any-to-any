import { Text } from "types";

export const lbTh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { lbIpaRules } = await import("data/lb/lb-ipa.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");

  const transliterator = RBT.fromRules(lbIpaRules + ipaThRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
