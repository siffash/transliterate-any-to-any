import { Text } from "types";

export const hiLt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hiIpaGemRules } = await import("data/hi/hi-ipa_gem.rules");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaLtRules } = await import("data/ipa/ipa-lt.rules");

  const transliterator = RBT.fromRules(
    hiIpaRules + hiIpaGemRules + ipaAspHRules + ipaLtRules + "::Title;",
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
