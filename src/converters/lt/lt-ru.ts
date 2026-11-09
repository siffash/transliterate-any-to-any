import { Text } from "types";

export const ltRu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ltLatnRules } = await import("data/lt/lt-latn.rules");
  const { ltLatnPalatalRules } = await import("data/lt/lt-latn_palatal.rules");
  const { ltLatnIeRules } = await import("data/lt/lt-latn_ie.rules");
  const { ltCyrlRuRules } = await import("data/lt/lt-cyrl_ru.rules");
  const { latnRuRules } = await import("data/latn/latn-ru.rules");

  const transliterator = RBT.fromRules(
    ltLatnRules + ltLatnPalatalRules + ltLatnIeRules + latnRuRules + ltCyrlRuRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
