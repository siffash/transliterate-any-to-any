import { Text } from "types";

export const etAr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { etIpaRules } = await import("data/et/et-ipa.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");

  const transliterator = RBT.fromRules(etIpaRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
