import { Text } from "types";

export const huMk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { huLatnMkRules } = await import("data/hu/hu-latn_mk.rules");
  const { huLatnRules } = await import("data/hu/hu-latn.rules");
  const { huLatnYRules } = await import("data/hu/hu-latn_y.rules");
  const { latnMkRules } = await import("data/latn/latn-mk.rules");

  const transliterator = RBT.fromRules(huLatnMkRules + huLatnRules + huLatnYRules + latnMkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
