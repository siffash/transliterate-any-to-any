import { Text } from "types";

export const kkBg = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { kkBgRules } = await import("data/kk/kk-bg.rules");

  const transliterator = RBT.fromRules(kkBgRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
