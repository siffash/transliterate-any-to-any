import { Text } from "types";

export const ltUk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ltLatnRules } = await import("data/lt/lt-latn.rules");
  const { ltLatnPalatalRules } = await import("data/lt/lt-latn_palatal.rules");
  const { ltLatnIeRules } = await import("data/lt/lt-latn_ie.rules");
  const { ltCyrlUkRules } = await import("data/lt/lt-cyrl_uk.rules");
  const { latnUkRules } = await import("data/latn/latn-uk.rules");

  const transliterator = RBT.fromRules(
    ltLatnRules + ltLatnPalatalRules + ltLatnIeRules + latnUkRules + ltCyrlUkRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
