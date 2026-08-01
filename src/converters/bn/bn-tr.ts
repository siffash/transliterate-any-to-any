import { Text } from "types";

export const bnTr = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { bnIpaRules } = await import("constants/bn-ipa.rules");
  const { ipaTrRules } = await import("constants/ipa-tr.rules");

  const transliterator = RBT.fromRules(bnIpaRules + ipaTrRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
