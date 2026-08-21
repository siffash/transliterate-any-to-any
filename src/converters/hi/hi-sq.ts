import { Text } from "types";

export const hiSq = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaSqRules } = await import("data/ipa/ipa-sq.rules");

  const transliterator = RBT.fromRules(hiIpaRules + ipaSqRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
