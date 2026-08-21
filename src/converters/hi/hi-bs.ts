import { Text } from "types";

export const hiBs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaBsRules } = await import("data/ipa/ipa-bs.rules");

  const transliterator = RBT.fromRules(hiIpaRules + ipaBsRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
