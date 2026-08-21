import { Text } from "types";

export const roHi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { roIpaRules } = await import("data/ro/ro-ipa.rules");
  const { ipaHiRules } = await import("data/ipa/ipa-hi.rules");

  const transliterator = RBT.fromRules(roIpaRules + ipaHiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
