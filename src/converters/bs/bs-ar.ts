import { Text } from "types";

export const bsAr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bsIpaRules } = await import("data/bs-ipa.rules");
  const { ipaArRules } = await import("data/ipa-ar.rules");

  const transliterator = RBT.fromRules(bsIpaRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
