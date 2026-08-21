import { Text } from "types";

export const roAr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { roIpaRules } = await import("data/ro/ro-ipa.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");

  const transliterator = RBT.fromRules(roIpaRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
