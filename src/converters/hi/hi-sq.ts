import { Text } from "types";

export const hiSq = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hiIpaRules } = await import("constants/hi-ipa.rules");
  const { ipaSqRules } = await import("constants/ipa-sq.rules");

  const transliterator = RBT.fromRules(hiIpaRules + ipaSqRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
