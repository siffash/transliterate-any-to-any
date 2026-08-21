import { Text } from "types";

export const hrAr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hrIpaRules } = await import("data/hr/hr-ipa.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");

  const transliterator = RBT.fromRules(hrIpaRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
