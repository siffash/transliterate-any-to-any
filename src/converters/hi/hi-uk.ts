import { Text } from "types";

export const hiUk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ipaGemDRules } = await import("data/ipa/ipa_gemd.rules");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaAspXRules } = await import("data/ipa/ipa_aspx.rules");
  const { hiIpaUkRules } = await import("data/hi/hi-ipa_uk.rules");
  const { ipaUkRules } = await import("data/ipa/ipa-uk.rules");

  const transliterator = RBT.fromRules(
    hiIpaRules + ipaGemDRules + ipaAspXRules + hiIpaUkRules + ipaUkRules + "::Title;",
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
