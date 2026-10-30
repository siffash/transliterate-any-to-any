import { Text } from "types";

export const msKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { msIpaRules } = await import("data/ms/ms-ipa.rules");
  const { ipaFinalHRules } = await import("data/ipa/ipa_finalh.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  const transliterator = RBT.fromRules(msIpaRules + ipaFinalHRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
