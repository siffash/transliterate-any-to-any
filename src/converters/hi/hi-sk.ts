import { Text } from "types";

export const hiSk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hiIpaGemDRules } = await import("data/hi/hi-ipa_gemd.rules");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaSkRules } = await import("data/ipa/ipa-sk.rules");

  const transliterator = RBT.fromRules(
    hiIpaRules + hiIpaGemDRules + ipaAspHRules + ipaSkRules + "::Title;",
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
