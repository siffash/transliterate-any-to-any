import { Text } from "types";

export const bnTr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bnIpaRules } = await import("data/bn/bn-ipa.rules");
  const { ipaTrRules } = await import("data/ipa/ipa-tr.rules");

  const transliterator = RBT.fromRules(bnIpaRules + ipaTrRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
