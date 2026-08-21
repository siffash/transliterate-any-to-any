import { Text } from "types";

export const fiKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { fiIpaRules } = await import("data/fi/fi-ipa.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  const transliterator = RBT.fromRules(fiIpaRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
