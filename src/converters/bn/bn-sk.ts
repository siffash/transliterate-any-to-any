import { Text } from "types";

export const bnSk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bnIpaRules } = await import("constants/bn-ipa.rules");
  const { ipaSkRules } = await import("constants/ipa-sk.rules");

  const transliterator = RBT.fromRules(bnIpaRules + ipaSkRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
