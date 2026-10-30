import { Text } from "types";

export const idZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { idIpaRules } = await import("data/id/id-ipa.rules");
  const { ipaZhCodaRules } = await import("data/ipa/ipa-zh_coda.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  const transliterator = RBT.fromRules(idIpaRules + ipaZhCodaRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
