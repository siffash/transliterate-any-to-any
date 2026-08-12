import { Text } from "types";

export const csHi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { csIpaRules } = await import("constants/cs-ipa.rules");
  const { ipaHiRules } = await import("constants/ipa-hi.rules");

  const transliterator = RBT.fromRules(csIpaRules + ipaHiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
