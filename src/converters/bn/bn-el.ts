import { Text } from "types";

export const bnEl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bnLatnGemRules } = await import("data/bn/bn-latn_gem.rules");
  const { bnLatnElRules } = await import("data/bn/bn-latn_el.rules");
  const { bnLatnRules } = await import("data/bn/bn-latn.rules");
  const { latnElRules } = await import("data/latn/latn-el.rules");

  const transliterator = RBT.fromRules(bnLatnRules + bnLatnGemRules + bnLatnElRules + latnElRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
