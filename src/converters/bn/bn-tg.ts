import { Text } from "types";

export const bnTg = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bnIpaRules } = await import("data/bn/bn-ipa.rules");
  const { ipaTgRules } = await import("data/ipa/ipa-tg.rules");

  const transliterator = RBT.fromRules(bnIpaRules + ipaTgRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
