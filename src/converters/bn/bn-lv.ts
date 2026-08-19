import { Text } from "types";

export const bnLv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bnIpaRules } = await import("data/bn/bn-ipa.rules");
  const { ipaLvRules } = await import("data/ipa/ipa-lv.rules");

  const transliterator = RBT.fromRules(bnIpaRules + ipaLvRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
