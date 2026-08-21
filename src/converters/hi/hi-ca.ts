import { Text } from "types";

export const hiCa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaCaRules } = await import("data/ipa/ipa-ca.rules");

  const transliterator = RBT.fromRules(hiIpaRules + ipaCaRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
