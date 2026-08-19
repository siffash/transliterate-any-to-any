import { Text } from "types";

export const kkAr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { kkIpaRules } = await import("data/kk/kk-ipa.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");

  const transliterator = RBT.fromRules(kkIpaRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
