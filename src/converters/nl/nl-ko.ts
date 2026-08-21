import { Text } from "types";

export const nlKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { nlIpaRules } = await import("data/nl/nl-ipa.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  const transliterator = RBT.fromRules(nlIpaRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
