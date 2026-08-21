import { Text } from "types";

export const kaJa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { kaIpaRules } = await import("data/ka/ka-ipa.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");

  const transliterator = RBT.fromRules(kaIpaRules + ipaJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
