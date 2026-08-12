import { Text } from "types";

export const sqEn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { sqLatnRules } = await import("data/sq-latn.rules");
  const { latnEnRules } = await import("data/latn-en.rules");

  const transliterator = RBT.fromRules(sqLatnRules + latnEnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
