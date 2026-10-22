import { Text } from "types";

export const hiFi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { hiIpaHRules } = await import("data/hi/hi-ipa_h.rules");
  const { ipaFiRules } = await import("data/ipa/ipa-fi.rules");

  const transliterator = RBT.fromRules(hiIpaRules + hiIpaHRules + ipaFiRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
