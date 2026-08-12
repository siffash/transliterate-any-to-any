import { Text } from "types";

export const plJa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { plIpaRules } = await import("constants/pl-ipa.rules");
  const { ipaJaRules } = await import("constants/ipa-ja.rules");

  const transliterator = RBT.fromRules(plIpaRules + ipaJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
