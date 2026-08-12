import { Text } from "types";

export const hiEs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hiIpaRules } = await import("constants/hi-ipa.rules");
  const { ipaEsRules } = await import("constants/ipa-es.rules");

  const transliterator = RBT.fromRules(hiIpaRules + ipaEsRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
