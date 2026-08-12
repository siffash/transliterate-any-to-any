import { Text } from "types";

export const sqFi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { sqLatnRules } = await import("constants/sq-latn.rules");
  const { latnFiRules } = await import("constants/latn-fi.rules");

  const transliterator = RBT.fromRules(sqLatnRules + latnFiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
