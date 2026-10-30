import { Text } from "types";

export const idTh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { idIpaRules } = await import("data/id/id-ipa.rules");
  const { ipaThGlottalRules } = await import("data/ipa/ipa-th_glottal.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");

  const transliterator = RBT.fromRules(idIpaRules + ipaThGlottalRules + ipaThRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
