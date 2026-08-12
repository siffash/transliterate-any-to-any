import { Text } from "types";

export const bnKk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bnIpaRules } = await import("constants/bn-ipa.rules");
  const { ipaKkRules } = await import("constants/ipa-kk.rules");

  const transliterator = RBT.fromRules(bnIpaRules + ipaKkRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
