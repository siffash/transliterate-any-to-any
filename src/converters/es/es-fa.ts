import { Text } from "types";

export const esFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ipaWURules } = await import("data/ipa/ipa_w-u.rules");
  const { esIpaRules } = await import("data/es/es-ipa.rules");
  const { esIpaZRules } = await import("data/es/es-ipa_z.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");

  const transliterator = RBT.fromRules(esIpaZRules + esIpaRules + ipaWURules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
