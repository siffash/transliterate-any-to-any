import { Text } from "types";

export const idTh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { idIpaRules } = await import("data/id/id-ipa.rules");
  const { ipaThGlottalRules } = await import("data/ipa/ipa-th_glottal.rules");
  const { ipaThOpenRules } = await import("data/ipa/ipa-th_open.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");
  const { ipaThKaranRules } = await import("data/ipa/ipa-th_karan.rules");

  const transliterator = RBT.fromRules(
    idIpaRules + ipaThGlottalRules + ipaThOpenRules + ipaThRules + ipaThKaranRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
