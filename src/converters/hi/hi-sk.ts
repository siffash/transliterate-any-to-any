import { Text } from "types";

export const hiSk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { hiIpaHRules } = await import("data/hi/hi-ipa_h.rules");
  const { ipaSkRules } = await import("data/ipa/ipa-sk.rules");

  const transliterator = RBT.fromRules(hiIpaRules + hiIpaHRules + ipaSkRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
