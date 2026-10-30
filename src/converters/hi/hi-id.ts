import { Text } from "types";

export const hiId = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaIdRules } = await import("data/ipa/ipa-id.rules");

  const transliterator = RBT.fromRules(hiIpaRules + ipaAspHRules + ipaIdRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
