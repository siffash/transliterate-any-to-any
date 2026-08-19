import { Text } from "types";

export const bnBg = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bnIpaRules } = await import("data/bn/bn-ipa.rules");
  const { ipaBgRules } = await import("data/ipa/ipa-bg.rules");

  const transliterator = RBT.fromRules(bnIpaRules + ipaBgRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
