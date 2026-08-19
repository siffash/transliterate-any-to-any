import { Text } from "types";

export const hiFi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaFiRules } = await import("data/ipa/ipa-fi.rules");

  const transliterator = RBT.fromRules(hiIpaRules + ipaFiRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
