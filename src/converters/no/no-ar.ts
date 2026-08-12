import { Text } from "types";

export const noAr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { noIpaRules } = await import("constants/no-ipa.rules");
  const { ipaArRules } = await import("constants/ipa-ar.rules");

  const transliterator = RBT.fromRules(noIpaRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
