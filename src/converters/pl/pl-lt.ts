import { Text } from "types";

export const plLt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { plLatnRules } = await import("constants/pl-latn.rules");
  const { latnLtRules } = await import("constants/latn-lt.rules");

  const transliterator = RBT.fromRules(plLatnRules + latnLtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
