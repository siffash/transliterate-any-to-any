import { Text } from "types";

export const esHe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ipaWURules } = await import("data/ipa/ipa_w-u.rules");
  const { esIpaRules } = await import("data/es/es-ipa.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  const transliterator = RBT.fromRules(esIpaRules + ipaWURules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
