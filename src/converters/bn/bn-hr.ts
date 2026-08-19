import { Text } from "types";

export const bnHr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bnIpaRules } = await import("data/bn/bn-ipa.rules");
  const { ipaHrRules } = await import("data/ipa/ipa-hr.rules");

  const transliterator = RBT.fromRules(bnIpaRules + ipaHrRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
