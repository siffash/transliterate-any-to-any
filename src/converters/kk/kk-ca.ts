import { Text } from "types";

export const kkCa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { kkLatnKzRules } = await import("data/kk/kk-latn_kz.rules");

  const transliterator = RBT.fromRules(kkLatnKzRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
