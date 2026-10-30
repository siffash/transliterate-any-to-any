import { Text } from "types";

export const hiUk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hiIpaGemDRules } = await import("data/hi/hi-ipa_gemd.rules");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { hiIpaXRules } = await import("data/hi/hi-ipa_x.rules");
  const { ipaUkRules } = await import("data/ipa/ipa-uk.rules");

  const transliterator = RBT.fromRules(
    hiIpaRules + hiIpaGemDRules + hiIpaXRules + ipaUkRules + "::Title;",
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
