import { Text } from "types";

export const hiSl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { hiIpaHRules } = await import("data/hi/hi-ipa_h.rules");
  const { ipaSlRules } = await import("data/ipa/ipa-sl.rules");

  const transliterator = RBT.fromRules(hiIpaRules + hiIpaHRules + ipaSlRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
