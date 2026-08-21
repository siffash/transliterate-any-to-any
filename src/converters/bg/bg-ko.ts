import { Text } from "types";

export const bgKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bgIpaRules } = await import("data/bg/bg-ipa.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  const transliterator = RBT.fromRules(bgIpaRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
