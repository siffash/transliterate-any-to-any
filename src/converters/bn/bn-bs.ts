import { Text } from "types";

export const bnBs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bnIpaRules } = await import("data/bn/bn-ipa.rules");
  const { ipaBsRules } = await import("data/ipa/ipa-bs.rules");

  const transliterator = RBT.fromRules(bnIpaRules + ipaBsRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
