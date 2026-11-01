import { Text } from "types";

export const skBg = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { skLatnRules } = await import("data/sk/sk-latn.rules");
  const { csSkLatnPalatalRules } = await import("data/latn/cs_sk-latn_palatal.rules");
  const { latnBgRules } = await import("data/latn/latn-bg.rules");
  const { latnBgPalatalRules } = await import("data/latn/latn-bg_palatal.rules");

  const transliterator = RBT.fromRules(
    csSkLatnPalatalRules + skLatnRules + latnBgPalatalRules + latnBgRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
