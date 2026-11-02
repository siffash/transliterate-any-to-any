import { Text } from "types";

export const trHi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { trIpaRules } = await import("data/tr/tr-ipa.rules");
  const { ipaHiLongARules } = await import("data/ipa/ipa-hi_long-a.rules");
  const { ipaHiRules } = await import("data/ipa/ipa-hi.rules");

  const transliterator = RBT.fromRules(trIpaRules + ipaHiLongARules + ipaHiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
