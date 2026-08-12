import { Text } from "types";

export const hiNl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hiIpaRules } = await import("constants/hi-ipa.rules");
  const { ipaNlRules } = await import("constants/ipa-nl.rules");

  const transliterator = RBT.fromRules(hiIpaRules + ipaNlRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
