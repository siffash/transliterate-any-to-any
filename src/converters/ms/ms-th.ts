import { Text } from "types";

export const msTh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { msIpaRules } = await import("data/ms/ms-ipa.rules");
  const { ipaThGlottalRules } = await import("data/ipa/ipa-th_glottal.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");

  const transliterator = RBT.fromRules(msIpaRules + ipaThGlottalRules + ipaThRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
