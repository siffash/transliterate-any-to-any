import { Text } from "types";

export const hiIt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hiIpaRules } = await import("constants/hi-ipa.rules");
  const { ipaItRules } = await import("constants/ipa-it.rules");

  const transliterator = RBT.fromRules(hiIpaRules + ipaItRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
