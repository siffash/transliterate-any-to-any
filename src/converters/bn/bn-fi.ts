import { Text } from "types";

export const bnFi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bnIpaRules } = await import("data/bn-ipa.rules");
  const { ipaFiRules } = await import("data/ipa-fi.rules");

  const transliterator = RBT.fromRules(bnIpaRules + ipaFiRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
