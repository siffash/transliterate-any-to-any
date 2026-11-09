import { Text } from "types";

export const ltMk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ltLatnRules } = await import("data/lt/lt-latn.rules");
  const { ltLatnPalatalRules } = await import("data/lt/lt-latn_palatal.rules");
  const { latnMkRules } = await import("data/latn/latn-mk.rules");

  const transliterator = RBT.fromRules(ltLatnRules + ltLatnPalatalRules + latnMkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
