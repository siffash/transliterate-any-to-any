import { Text } from "types";

export const hiCs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hiIpaGemDRules } = await import("data/hi/hi-ipa_gemd.rules");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { hiIpaHRules } = await import("data/hi/hi-ipa_h.rules");
  const { ipaCsRules } = await import("data/ipa/ipa-cs.rules");

  const transliterator = RBT.fromRules(
    hiIpaRules + hiIpaGemDRules + hiIpaHRules + ipaCsRules + "::Title;",
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
