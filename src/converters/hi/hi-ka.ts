import { Text } from "types";

export const hiKa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaKaRules } = await import("data/ipa/ipa-ka.rules");

  const transliterator = RBT.fromRules(hiIpaRules + ipaKaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
