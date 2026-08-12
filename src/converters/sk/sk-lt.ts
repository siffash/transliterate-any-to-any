import { Text } from "types";

export const skLt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { skLatnRules } = await import("data/sk-latn.rules");
  const { latnLtRules } = await import("data/latn-lt.rules");

  const transliterator = RBT.fromRules(skLatnRules + latnLtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
