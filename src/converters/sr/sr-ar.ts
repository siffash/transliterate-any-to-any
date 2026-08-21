import { Text } from "types";

export const srAr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { srIpaRules } = await import("data/sr/sr-ipa.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");

  const transliterator = RBT.fromRules(srIpaRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
