import { Text } from "types";

export const caKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { caIpaRules } = await import("data/ca/ca-ipa.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  const transliterator = RBT.fromRules(caIpaRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
