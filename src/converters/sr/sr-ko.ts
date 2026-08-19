import { Text } from "types";

export const srKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { srIpaRules } = await import("data/sr/sr-ipa.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  const transliterator = RBT.fromRules(srIpaRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
