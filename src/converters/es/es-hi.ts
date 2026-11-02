import { Text } from "types";

export const esHi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { esIpaRules } = await import("data/es/es-ipa.rules");
  const { ipaHiLongARules } = await import("data/ipa/ipa-hi_long-a.rules");
  const { ipaHiRules } = await import("data/ipa/ipa-hi.rules");

  const transliterator = RBT.fromRules(esIpaRules + ipaHiLongARules + ipaHiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
