import { Text } from "types";

export const mtJa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { mtIpaRules } = await import("constants/mt-ipa.rules");
  const { ipaJaRules } = await import("constants/ipa-ja.rules");

  const transliterator = RBT.fromRules(mtIpaRules + ipaJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
