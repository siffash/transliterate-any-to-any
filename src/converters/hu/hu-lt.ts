import { Text } from "types";

export const huLt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { huLatnRules } = await import("data/hu/hu-latn.rules");
  const { huLatnYRules } = await import("data/hu/hu-latn_y.rules");
  const { huLatnGyRules } = await import("data/hu/hu-latn_gy.rules");
  const { latnLtRules } = await import("data/latn/latn-lt.rules");

  const transliterator = RBT.fromRules(huLatnRules + huLatnYRules + huLatnGyRules + latnLtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
