import { Text } from "types";

export const hiDe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hiIpaRules } = await import("data/hi-ipa.rules");
  const { ipaDeRules } = await import("data/ipa-de.rules");

  const transliterator = RBT.fromRules(hiIpaRules + ipaDeRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
