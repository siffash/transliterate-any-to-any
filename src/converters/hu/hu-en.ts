import { Text } from "types";

export const huEn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { huLatnRules } = await import("data/hu/hu-latn.rules");
  const { huLatnEnRules } = await import("data/hu/hu-latn_en.rules");
  const { latnEnRules } = await import("data/latn/latn-en.rules");

  const transliterator = RBT.fromRules(huLatnRules + huLatnEnRules + latnEnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
