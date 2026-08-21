import { Text } from "types";

export const hiLv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaLvRules } = await import("data/ipa/ipa-lv.rules");

  const transliterator = RBT.fromRules(hiIpaRules + ipaLvRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
