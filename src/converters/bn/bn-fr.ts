import { Text } from "types";

export const bnFr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bnLatnRules } = await import("data/bn/bn-latn.rules");
  const { latnFrRules } = await import("data/latn/latn-fr.rules");

  const transliterator = RBT.fromRules(bnLatnRules + latnFrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
