import { Text } from "types";

export const skRu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { skLatnRules } = await import("data/sk/sk-latn.rules");
  const { csSkLatnPalatalRules } = await import("data/latn/cs_sk-latn_palatal.rules");
  const { latnRuRules } = await import("data/latn/latn-ru.rules");
  const { latnRuHRules } = await import("data/latn/latn-ru_h.rules");
  const { latnRuPalatalRules } = await import("data/latn/latn-ru_palatal.rules");

  const transliterator = RBT.fromRules(
    csSkLatnPalatalRules + skLatnRules + latnRuHRules + latnRuPalatalRules + latnRuRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
