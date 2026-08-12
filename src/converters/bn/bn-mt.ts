import { Text } from "types";

export const bnMt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bnIpaRules } = await import("constants/bn-ipa.rules");
  const { ipaMtRules } = await import("constants/ipa-mt.rules");

  const transliterator = RBT.fromRules(bnIpaRules + ipaMtRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
