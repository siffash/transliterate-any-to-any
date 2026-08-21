import { Text } from "types";

export const noFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { noIpaRules } = await import("data/no/no-ipa.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");

  const transliterator = RBT.fromRules(noIpaRules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
