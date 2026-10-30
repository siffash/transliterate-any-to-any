import { Text } from "types";

export const hiTr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaTrRules } = await import("data/ipa/ipa-tr.rules");

  const transliterator = RBT.fromRules(hiIpaRules + ipaAspHRules + ipaTrRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
