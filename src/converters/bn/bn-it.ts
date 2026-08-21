import { Text } from "types";

export const bnIt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bnIpaRules } = await import("data/bn/bn-ipa.rules");
  const { ipaItRules } = await import("data/ipa/ipa-it.rules");

  const transliterator = RBT.fromRules(bnIpaRules + ipaItRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
