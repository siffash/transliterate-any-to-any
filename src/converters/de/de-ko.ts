import { Text } from "types";

export const deKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { deIpaRules } = await import("constants/de-ipa.rules");
  const { ipaKoRules } = await import("constants/ipa-ko.rules");

  const transliterator = RBT.fromRules(deIpaRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
