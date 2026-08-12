import { Text } from "types";

export const huHi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { huIpaRules } = await import("constants/hu-ipa.rules");
  const { ipaHiRules } = await import("constants/ipa-hi.rules");

  const transliterator = RBT.fromRules(huIpaRules + ipaHiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
