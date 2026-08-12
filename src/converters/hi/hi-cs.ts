import { Text } from "types";

export const hiCs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hiIpaRules } = await import("data/hi-ipa.rules");
  const { ipaCsRules } = await import("data/ipa-cs.rules");

  const transliterator = RBT.fromRules(hiIpaRules + ipaCsRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
