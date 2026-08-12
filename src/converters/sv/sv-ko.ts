import { Text } from "types";

export const svKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { svIpaRules } = await import("constants/sv-ipa.rules");
  const { ipaKoRules } = await import("constants/ipa-ko.rules");

  const transliterator = RBT.fromRules(svIpaRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
