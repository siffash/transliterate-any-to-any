import { Text } from "types";

export const bnMk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bnIpaRules } = await import("constants/bn-ipa.rules");
  const { ipaMkRules } = await import("constants/ipa-mk.rules");

  const transliterator = RBT.fromRules(bnIpaRules + ipaMkRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
