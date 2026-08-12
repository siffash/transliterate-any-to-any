import { Text } from "types";

export const kkHi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { kkIpaRules } = await import("constants/kk-ipa.rules");
  const { ipaHiRules } = await import("constants/ipa-hi.rules");

  const transliterator = RBT.fromRules(kkIpaRules + ipaHiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
