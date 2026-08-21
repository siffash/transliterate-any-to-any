import { Text } from "types";

export const bnSv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bnLatnRules } = await import("data/bn/bn-latn.rules");
  const { latnSvRules } = await import("data/latn/latn-sv.rules");

  const transliterator = RBT.fromRules(bnLatnRules + latnSvRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
