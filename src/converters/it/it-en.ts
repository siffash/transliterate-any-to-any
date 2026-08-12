import { Text } from "types";

export const itEn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { itLatnRules } = await import("constants/it-latn.rules");
  const { latnEnRules } = await import("constants/latn-en.rules");

  const transliterator = RBT.fromRules(itLatnRules + latnEnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
