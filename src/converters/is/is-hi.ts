import { Text } from "types";

export const isHi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { isIpaRules } = await import("data/is-ipa.rules");
  const { ipaHiRules } = await import("data/ipa-hi.rules");

  const transliterator = RBT.fromRules(isIpaRules + ipaHiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
