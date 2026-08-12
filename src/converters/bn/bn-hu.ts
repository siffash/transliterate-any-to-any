import { Text } from "types";

export const bnHu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bnIpaRules } = await import("constants/bn-ipa.rules");
  const { ipaHuRules } = await import("constants/ipa-hu.rules");

  const transliterator = RBT.fromRules(bnIpaRules + ipaHuRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
