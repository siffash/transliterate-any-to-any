import { Text } from "types";

export const msJa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { msIpaRules } = await import("data/ms/ms-ipa.rules");
  const { ipaFinalHRules } = await import("data/ipa/ipa_finalh.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");

  const transliterator = RBT.fromRules(msIpaRules + ipaFinalHRules + ipaJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
