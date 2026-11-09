import { Text } from "types";

export const ltHy = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ltLatnRules } = await import("data/lt/lt-latn.rules");
  const { ltLatnPalatalRules } = await import("data/lt/lt-latn_palatal.rules");
  const { ltLatnIeRules } = await import("data/lt/lt-latn_ie.rules");
  const { latnHyRules } = await import("data/latn/latn-hy.rules");

  const transliterator = RBT.fromRules(
    ltLatnRules + ltLatnPalatalRules + ltLatnIeRules + latnHyRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
