import { Text } from "types";

export const hiEs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaEsRules } = await import("data/ipa/ipa-es.rules");

  const transliterator = RBT.fromRules(hiIpaRules + ipaEsRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
