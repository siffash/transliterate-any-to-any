import { Text } from "types";

export const bnSr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bnIpaRules } = await import("data/bn-ipa.rules");
  const { ipaSrRules } = await import("data/ipa-sr.rules");

  const transliterator = RBT.fromRules(bnIpaRules + ipaSrRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
