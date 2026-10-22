import { Text } from "types";

export const deJa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { deIpaRules } = await import("data/de/de-ipa.rules");
  const { deIpaJaRules } = await import("data/de/de-ipa_ja.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");

  const transliterator = RBT.fromRules(deIpaRules + deIpaJaRules + ipaJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
