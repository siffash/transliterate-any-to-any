import { Text } from "types";

export const ptAr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ptIpaRules } = await import("data/pt/pt-ipa.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");

  const transliterator = RBT.fromRules(ptIpaRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
