import { Text } from "types";

export const hrKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hrIpaRules } = await import("data/hr/hr-ipa.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  const transliterator = RBT.fromRules(hrIpaRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
