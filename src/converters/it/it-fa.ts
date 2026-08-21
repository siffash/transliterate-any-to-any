import { Text } from "types";

export const itFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { itIpaRules } = await import("data/it/it-ipa.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");

  const transliterator = RBT.fromRules(itIpaRules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
