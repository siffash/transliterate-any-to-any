import { Text } from "types";

export const bnDe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bnIpaRules } = await import("data/bn-ipa.rules");
  const { ipaDeRules } = await import("data/ipa-de.rules");

  const transliterator = RBT.fromRules(bnIpaRules + ipaDeRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
