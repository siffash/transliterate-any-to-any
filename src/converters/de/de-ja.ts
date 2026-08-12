import { Text } from "types";

export const deJa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { deIpaRules } = await import("constants/de-ipa.rules");
  const { ipaJaRules } = await import("constants/ipa-ja.rules");

  const transliterator = RBT.fromRules(deIpaRules + ipaJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
