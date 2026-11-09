import { Text } from "types";

export const ltBg = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ltLatnRules } = await import("data/lt/lt-latn.rules");
  const { ltLatnPalatalRules } = await import("data/lt/lt-latn_palatal.rules");
  const { latnBgRules } = await import("data/latn/latn-bg.rules");

  const transliterator = RBT.fromRules(ltLatnRules + ltLatnPalatalRules + latnBgRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
