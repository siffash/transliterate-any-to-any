import { Text } from "types";

export const bnCa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bnIpaRules } = await import("constants/bn-ipa.rules");
  const { ipaCaRules } = await import("constants/ipa-ca.rules");

  const transliterator = RBT.fromRules(bnIpaRules + ipaCaRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
