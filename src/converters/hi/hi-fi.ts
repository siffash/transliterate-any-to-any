import { Text } from "types";

export const hiFi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ipaGemTRules } = await import("data/ipa/ipa_gemt.rules");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaFiRules } = await import("data/ipa/ipa-fi.rules");

  const transliterator = RBT.fromRules(
    hiIpaRules + ipaGemTRules + ipaAspHRules + ipaFiRules + "::Title;",
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
