import { Text } from "types";

export const bgFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bgIpaRules } = await import("constants/bg-ipa.rules");
  const { ipaFaRules } = await import("constants/ipa-fa.rules");

  const transliterator = RBT.fromRules(bgIpaRules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
