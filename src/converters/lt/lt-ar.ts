import { Text } from "types";

export const ltAr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ltIpaRules } = await import("data/lt/lt-ipa.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");

  const transliterator = RBT.fromRules(ltIpaRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
