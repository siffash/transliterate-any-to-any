import { Text } from "types";

export const hiIt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaItRules } = await import("data/ipa/ipa-it.rules");

  const transliterator = RBT.fromRules(hiIpaRules + ipaItRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
