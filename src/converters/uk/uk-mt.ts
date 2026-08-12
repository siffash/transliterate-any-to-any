import { Text } from "types";

export const ukMt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ukLatnRules } = await import("constants/uk-latn.rules");
  const { latnMtRules } = await import("constants/latn-mt.rules");

  const transliterator = RBT.fromRules(ukLatnRules + latnMtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
