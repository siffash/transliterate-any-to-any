import { Text } from "types";

export const hiLb = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { hiIpaHRules } = await import("data/hi/hi-ipa_h.rules");
  const { ipaLbRules } = await import("data/ipa/ipa-lb.rules");

  const transliterator = RBT.fromRules(hiIpaRules + hiIpaHRules + ipaLbRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
