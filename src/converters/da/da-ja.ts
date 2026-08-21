import { Text } from "types";

export const daJa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { daIpaRules } = await import("data/da/da-ipa.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");

  const transliterator = RBT.fromRules(daIpaRules + ipaJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
