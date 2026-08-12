import { Text } from "types";

export const caMt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { caLatnRules } = await import("constants/ca-latn.rules");
  const { latnMtRules } = await import("constants/latn-mt.rules");

  const transliterator = RBT.fromRules(caLatnRules + latnMtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
