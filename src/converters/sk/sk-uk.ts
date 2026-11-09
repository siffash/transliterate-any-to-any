import { Text } from "types";

export const skUk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { skLatnRules } = await import("data/sk/sk-latn.rules");
  const { csSkLatnYRules } = await import("data/latn/cs_sk-latn_y.rules");
  const { csSkLatnUkAdjRules } = await import("data/latn/cs_sk-latn_uk-adj.rules");
  const { csSkLatnPalatalRules } = await import("data/latn/cs_sk-latn_palatal.rules");
  const { latnUkRules } = await import("data/latn/latn-uk.rules");
  const { latnUkPalatalRules } = await import("data/latn/latn-uk_palatal.rules");
  const { latnUkHushingRules } = await import("data/latn/latn-uk_hushing.rules");

  const transliterator = RBT.fromRules(
    csSkLatnUkAdjRules +
      csSkLatnPalatalRules +
      csSkLatnYRules +
      skLatnRules +
      latnUkPalatalRules +
      latnUkRules +
      latnUkHushingRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
