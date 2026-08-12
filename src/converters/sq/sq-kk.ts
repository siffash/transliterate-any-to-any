import { Text } from "types";

export const sqKk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { sqLatnRules } = await import("constants/sq-latn.rules");
  const { latnKkRules } = await import("constants/latn-kk.rules");

  const transliterator = RBT.fromRules(sqLatnRules + latnKkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
