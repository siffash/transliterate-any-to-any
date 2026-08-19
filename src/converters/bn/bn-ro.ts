import { Text } from "types";

export const bnRo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bnIpaRules } = await import("data/bn/bn-ipa.rules");
  const { ipaRoRules } = await import("data/ipa/ipa-ro.rules");

  const transliterator = RBT.fromRules(bnIpaRules + ipaRoRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
