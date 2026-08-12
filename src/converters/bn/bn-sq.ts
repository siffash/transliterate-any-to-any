import { Text } from "types";

export const bnSq = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bnIpaRules } = await import("data/bn-ipa.rules");
  const { ipaSqRules } = await import("data/ipa-sq.rules");

  const transliterator = RBT.fromRules(bnIpaRules + ipaSqRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
