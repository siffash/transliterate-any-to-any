import { Text } from "types";

export const fiFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { fiIpaRules } = await import("data/fi-ipa.rules");
  const { ipaFaRules } = await import("data/ipa-fa.rules");

  const transliterator = RBT.fromRules(fiIpaRules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
