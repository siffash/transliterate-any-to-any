import { Text } from "types";

export const nlAr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { nlIpaRules } = await import("data/nl/nl-ipa.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");

  const transliterator = RBT.fromRules(nlIpaRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
