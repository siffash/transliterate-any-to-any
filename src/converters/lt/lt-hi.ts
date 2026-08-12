import { Text } from "types";

export const ltHi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ltIpaRules } = await import("data/lt-ipa.rules");
  const { ipaHiRules } = await import("data/ipa-hi.rules");

  const transliterator = RBT.fromRules(ltIpaRules + ipaHiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
