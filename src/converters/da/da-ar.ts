import { Text } from "types";

export const daAr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { daIpaRules } = await import("data/da/da-ipa.rules");
  const { daIpaRRules } = await import("data/da/da-ipa_r.rules");
  const { daIpaArRules } = await import("data/da/da-ipa_ar.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");

  const transliterator = RBT.fromRules(daIpaRules + daIpaRRules + daIpaArRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
