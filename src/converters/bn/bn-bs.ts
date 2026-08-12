import { Text } from "types";

export const bnBs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bnIpaRules } = await import("constants/bn-ipa.rules");
  const { ipaBsRules } = await import("constants/ipa-bs.rules");

  const transliterator = RBT.fromRules(bnIpaRules + ipaBsRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
