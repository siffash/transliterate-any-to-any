import { Text } from "types";

export const bnNl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bnIpaRules } = await import("data/bn/bn-ipa.rules");
  const { ipaNlRules } = await import("data/ipa/ipa-nl.rules");

  const transliterator = RBT.fromRules(bnIpaRules + ipaNlRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
