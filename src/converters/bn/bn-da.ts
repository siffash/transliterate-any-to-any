import { Text } from "types";

export const bnDa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bnLatnRules } = await import("data/bn/bn-latn.rules");
  const { latnDaRules } = await import("data/latn/latn-da.rules");

  const transliterator = RBT.fromRules(bnLatnRules + latnDaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
