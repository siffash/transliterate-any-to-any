import { Text } from "types";

export const ukTr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ukLatnRules } = await import("constants/uk-latn.rules");
  const { latnTrRules } = await import("constants/latn-tr.rules");

  const transliterator = RBT.fromRules(ukLatnRules + latnTrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
