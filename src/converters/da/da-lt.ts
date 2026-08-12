import { Text } from "types";

export const daLt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { daLatnRules } = await import("constants/da-latn.rules");
  const { latnLtRules } = await import("constants/latn-lt.rules");

  const transliterator = RBT.fromRules(daLatnRules + latnLtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
