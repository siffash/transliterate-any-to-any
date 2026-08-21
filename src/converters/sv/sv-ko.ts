import { Text } from "types";

export const svKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { svIpaRules } = await import("data/sv/sv-ipa.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  const transliterator = RBT.fromRules(svIpaRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
