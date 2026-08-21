import { Text } from "types";

export const bsHe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bsIpaRules } = await import("data/bs/bs-ipa.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  const transliterator = RBT.fromRules(bsIpaRules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
