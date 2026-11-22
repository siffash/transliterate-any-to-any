import { Text } from "types";

export const esAr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { esIpaRules } = await import("data/es/es-ipa.rules");
  const { esIpaZRules } = await import("data/es/es-ipa_z.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");
  const { ipaArLlRules } = await import("data/ipa/ipa-ar_ll.rules");

  const transliterator = RBT.fromRules(esIpaZRules + esIpaRules + ipaArLlRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
