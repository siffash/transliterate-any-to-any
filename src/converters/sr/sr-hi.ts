import { Text } from "types";

export const srHi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { srIpaRules } = await import("constants/sr-ipa.rules");
  const { ipaHiRules } = await import("constants/ipa-hi.rules");

  const transliterator = RBT.fromRules(srIpaRules + ipaHiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
