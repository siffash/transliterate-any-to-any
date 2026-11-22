import { Text } from "types";

export const srJa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { srIpaRules } = await import("data/sr/sr-ipa.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");
  const { ipaJaIcRules } = await import("data/ipa/ipa-ja_ic.rules");

  const transliterator = RBT.fromRules(srIpaRules + ipaJaIcRules + ipaJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
