import { Text } from "types";

export const trJa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { trIpaRules } = await import("data/tr/tr-ipa.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");

  const transliterator = RBT.fromRules(trIpaRules + ipaJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
