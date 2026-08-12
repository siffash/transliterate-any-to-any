import { Text } from "types";

export const hiRu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hiIpaRules } = await import("data/hi-ipa.rules");
  const { ipaRuRules } = await import("data/ipa-ru.rules");

  const transliterator = RBT.fromRules(hiIpaRules + ipaRuRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
