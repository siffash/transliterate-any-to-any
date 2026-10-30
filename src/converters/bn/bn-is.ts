import { Text } from "types";

export const bnIs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bnLatnGemTRules } = await import("data/bn/bn-latn_gemt.rules");
  const { bnLatnRules } = await import("data/bn/bn-latn.rules");
  const { latnIsRules } = await import("data/latn/latn-is.rules");

  const transliterator = RBT.fromRules(bnLatnRules + bnLatnGemTRules + latnIsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
