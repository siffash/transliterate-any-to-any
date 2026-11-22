import { Text } from "types";

export const bnLv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bnIpaRules } = await import("data/bn/bn-ipa.rules");
  const { bnIpaARules } = await import("data/bn/bn-ipa_a.rules");
  const { ipaLvRules } = await import("data/ipa/ipa-lv.rules");

  const transliterator = RBT.fromRules(bnIpaRules + bnIpaARules + ipaLvRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
