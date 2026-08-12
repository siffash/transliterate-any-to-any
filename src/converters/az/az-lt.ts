import { Text } from "types";

export const azLt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { azLatnRules } = await import("data/az-latn.rules");
  const { latnLtRules } = await import("data/latn-lt.rules");

  const transliterator = RBT.fromRules(azLatnRules + latnLtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
