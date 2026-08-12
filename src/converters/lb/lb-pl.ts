import { Text } from "types";

export const lbPl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { lbLatnRules } = await import("constants/lb-latn.rules");
  const { latnPlRules } = await import("constants/latn-pl.rules");

  const transliterator = RBT.fromRules(lbLatnRules + latnPlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
