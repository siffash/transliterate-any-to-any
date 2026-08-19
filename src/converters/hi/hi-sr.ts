import { Text } from "types";

export const hiSr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaSrRules } = await import("data/ipa/ipa-sr.rules");

  const transliterator = RBT.fromRules(hiIpaRules + ipaSrRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
