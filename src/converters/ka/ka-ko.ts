import { Text } from "types";

export const kaKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { kaIpaRules } = await import("constants/ka-ipa.rules");
  const { ipaKoRules } = await import("constants/ipa-ko.rules");

  const transliterator = RBT.fromRules(kaIpaRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
