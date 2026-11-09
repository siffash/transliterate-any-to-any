import { Text } from "types";

export const ptJa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ipaJaWRules } = await import("data/ipa/ipa-ja_w.rules");
  const { ptIpaRules } = await import("data/pt/pt-ipa.rules");
  const { ptIpaJaRules } = await import("data/pt/pt-ipa_ja.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");

  const transliterator = RBT.fromRules(ptIpaRules + ptIpaJaRules + ipaJaWRules + ipaJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
