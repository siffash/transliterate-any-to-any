import { Text } from "types";

export const itFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ipaWURules } = await import("data/ipa/ipa_w-u.rules");
  const { itIpaRules } = await import("data/it/it-ipa.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");

  const transliterator = RBT.fromRules(itIpaRules + ipaWURules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
