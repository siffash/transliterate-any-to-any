import { Text } from "types";

export const bgAr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bgIpaRules } = await import("constants/bg-ipa.rules");
  const { ipaArRules } = await import("constants/ipa-ar.rules");

  const transliterator = RBT.fromRules(bgIpaRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
