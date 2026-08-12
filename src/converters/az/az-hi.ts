import { Text } from "types";

export const azHi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { azIpaRules } = await import("constants/az-ipa.rules");
  const { ipaHiRules } = await import("constants/ipa-hi.rules");

  const transliterator = RBT.fromRules(azIpaRules + ipaHiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
