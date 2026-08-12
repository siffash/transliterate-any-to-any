import { Text } from "types";

export const hiDe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hiIpaRules } = await import("constants/hi-ipa.rules");
  const { ipaDeRules } = await import("constants/ipa-de.rules");

  const transliterator = RBT.fromRules(hiIpaRules + ipaDeRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
