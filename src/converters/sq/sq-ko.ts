import { Text } from "types";

export const sqKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { sqIpaRules } = await import("data/sq/sq-ipa.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  const transliterator = RBT.fromRules(sqIpaRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
