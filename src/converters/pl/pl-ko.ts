import { Text } from "types";

export const plKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { plIpaRules } = await import("constants/pl-ipa.rules");
  const { ipaKoRules } = await import("constants/ipa-ko.rules");

  const transliterator = RBT.fromRules(plIpaRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
