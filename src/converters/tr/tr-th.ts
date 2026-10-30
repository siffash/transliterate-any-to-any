import { Text } from "types";

export const trTh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { trIpaRules } = await import("data/tr/tr-ipa.rules");
  const { ipaThGlottalRules } = await import("data/ipa/ipa-th_glottal.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");

  const transliterator = RBT.fromRules(trIpaRules + ipaThGlottalRules + ipaThRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
