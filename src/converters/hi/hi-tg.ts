import { Text } from "types";

export const hiTg = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaTgRules } = await import("data/ipa/ipa-tg.rules");

  const transliterator = RBT.fromRules(hiIpaRules + ipaAspHRules + ipaTgRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
