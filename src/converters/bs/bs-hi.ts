import { Text } from "types";

export const bsHi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bsIpaRules } = await import("data/bs/bs-ipa.rules");
  const { ipaHiRules } = await import("data/ipa/ipa-hi.rules");

  const transliterator = RBT.fromRules(bsIpaRules + ipaHiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
