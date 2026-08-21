import { Text } from "types";

export const svAr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { svIpaRules } = await import("data/sv/sv-ipa.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");

  const transliterator = RBT.fromRules(svIpaRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
