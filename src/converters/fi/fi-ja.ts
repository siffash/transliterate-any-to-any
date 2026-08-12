import { Text } from "types";

export const fiJa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { fiIpaRules } = await import("constants/fi-ipa.rules");
  const { ipaJaRules } = await import("constants/ipa-ja.rules");

  const transliterator = RBT.fromRules(fiIpaRules + ipaJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
