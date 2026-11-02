import { Text } from "types";

export const lvHi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { lvIpaRules } = await import("data/lv/lv-ipa.rules");
  const { ipaHiLongARules } = await import("data/ipa/ipa-hi_long-a.rules");
  const { ipaHiRules } = await import("data/ipa/ipa-hi.rules");

  const transliterator = RBT.fromRules(lvIpaRules + ipaHiLongARules + ipaHiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
