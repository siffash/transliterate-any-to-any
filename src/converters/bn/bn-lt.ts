import { Text } from "types";

export const bnLt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bnIpaRules } = await import("constants/bn-ipa.rules");
  const { ipaLtRules } = await import("constants/ipa-lt.rules");

  const transliterator = RBT.fromRules(bnIpaRules + ipaLtRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
