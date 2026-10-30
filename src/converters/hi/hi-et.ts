import { Text } from "types";

export const hiEt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hiIpaGemTRules } = await import("data/hi/hi-ipa_gemt.rules");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaEtRules } = await import("data/ipa/ipa-et.rules");

  const transliterator = RBT.fromRules(
    hiIpaRules + hiIpaGemTRules + ipaAspHRules + ipaEtRules + "::Title;",
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
