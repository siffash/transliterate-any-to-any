import { Text } from "types";

export const hiPl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hiIpaRules } = await import("constants/hi-ipa.rules");
  const { ipaPlRules } = await import("constants/ipa-pl.rules");

  const transliterator = RBT.fromRules(hiIpaRules + ipaPlRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
