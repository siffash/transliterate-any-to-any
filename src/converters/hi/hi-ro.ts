import { Text } from "types";

export const hiRo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hiIpaGemRules } = await import("data/hi/hi-ipa_gem.rules");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaRoRules } = await import("data/ipa/ipa-ro.rules");

  const transliterator = RBT.fromRules(
    hiIpaRules + hiIpaGemRules + ipaAspHRules + ipaRoRules + "::Title;",
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
