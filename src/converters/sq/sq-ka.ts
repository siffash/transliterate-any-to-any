import { Text } from "types";

export const sqKa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { sqLatnRules } = await import("constants/sq-latn.rules");
  const { latnKaRules } = await import("constants/latn-ka.rules");

  const transliterator = RBT.fromRules(sqLatnRules + latnKaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
