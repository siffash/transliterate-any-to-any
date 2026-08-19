import { Text } from "types";

export const hiAz = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaAzRules } = await import("data/ipa/ipa-az.rules");

  const transliterator = RBT.fromRules(hiIpaRules + ipaAzRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
