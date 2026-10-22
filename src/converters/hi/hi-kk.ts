import { Text } from "types";

export const hiKk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { hiIpaXRules } = await import("data/hi/hi-ipa_x.rules");
  const { ipaKkRules } = await import("data/ipa/ipa-kk.rules");

  const transliterator = RBT.fromRules(hiIpaRules + hiIpaXRules + ipaKkRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
