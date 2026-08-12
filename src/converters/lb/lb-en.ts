import { Text } from "types";

export const lbEn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { lbLatnRules } = await import("constants/lb-latn.rules");
  const { latnEnRules } = await import("constants/latn-en.rules");

  const transliterator = RBT.fromRules(lbLatnRules + latnEnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
