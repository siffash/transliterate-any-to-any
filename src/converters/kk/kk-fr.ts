import { Text } from "types";

export const kkFr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { kkLatnRules } = await import("data/kk/kk-latn.rules");
  const { latnFrRules } = await import("data/latn/latn-fr.rules");

  const transliterator = RBT.fromRules(kkLatnRules + latnFrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
