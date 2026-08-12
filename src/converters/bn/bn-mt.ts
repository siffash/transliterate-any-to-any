import { Text } from "types";

export const bnMt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bnIpaRules } = await import("data/bn-ipa.rules");
  const { ipaMtRules } = await import("data/ipa-mt.rules");

  const transliterator = RBT.fromRules(bnIpaRules + ipaMtRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
