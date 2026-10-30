import { Text } from "types";

export const huNl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { huLatnRules } = await import("data/hu/hu-latn.rules");
  const { huLatnYRules } = await import("data/hu/hu-latn_y.rules");
  const { huLatnGyRules } = await import("data/hu/hu-latn_gy.rules");
  const { latnNlRules } = await import("data/latn/latn-nl.rules");

  const transliterator = RBT.fromRules(huLatnRules + huLatnYRules + huLatnGyRules + latnNlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
