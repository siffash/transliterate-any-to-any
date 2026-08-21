import { Text } from "types";

export const mkJa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { mkIpaRules } = await import("data/mk/mk-ipa.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");

  const transliterator = RBT.fromRules(mkIpaRules + ipaJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
