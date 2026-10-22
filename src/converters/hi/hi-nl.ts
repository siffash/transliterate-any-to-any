import { Text } from "types";

export const hiNl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { hiIpaHRules } = await import("data/hi/hi-ipa_h.rules");
  const { ipaNlRules } = await import("data/ipa/ipa-nl.rules");

  const transliterator = RBT.fromRules(hiIpaRules + hiIpaHRules + ipaNlRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
