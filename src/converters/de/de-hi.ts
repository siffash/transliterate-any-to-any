import { Text } from "types";

export const deHi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { deIpaRules } = await import("constants/de-ipa.rules");
  const { ipaHiRules } = await import("constants/ipa-hi.rules");

  const transliterator = RBT.fromRules(deIpaRules + ipaHiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
