import { Text } from "types";

export const etKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { etIpaRules } = await import("data/et/et-ipa.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  const transliterator = RBT.fromRules(etIpaRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
