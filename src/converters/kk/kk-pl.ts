import { Text } from "types";

export const kkPl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { kkLatnRules } = await import("constants/kk-latn.rules");
  const { latnPlRules } = await import("constants/latn-pl.rules");

  const transliterator = RBT.fromRules(kkLatnRules + latnPlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
