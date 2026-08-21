import { Text } from "types";

export const bsJa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bsIpaRules } = await import("data/bs/bs-ipa.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");

  const transliterator = RBT.fromRules(bsIpaRules + ipaJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
