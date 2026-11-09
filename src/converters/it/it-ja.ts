import { Text } from "types";

export const itJa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ipaJaWRules } = await import("data/ipa/ipa-ja_w.rules");
  const { itIpaRules } = await import("data/it/it-ipa.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");

  const transliterator = RBT.fromRules(itIpaRules + ipaJaWRules + ipaJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
