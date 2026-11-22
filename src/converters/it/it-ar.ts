import { Text } from "types";

export const itAr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { itIpaRules } = await import("data/it/it-ipa.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");
  const { itIpaArRules } = await import("data/it/it-ipa_ar.rules");

  const transliterator = RBT.fromRules(itIpaRules + itIpaArRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
