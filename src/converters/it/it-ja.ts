import { Text } from "types";

export const itJa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { itIpaRules } = await import("data/it/it-ipa.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");

  const transliterator = RBT.fromRules(itIpaRules + ipaJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
